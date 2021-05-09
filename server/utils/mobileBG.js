import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import models from '../models'
import windows1251 from 'windows-1251'
import config from '../config/config'

const generalUrl = 'https://levski-auto.mobile.bg/';
const carsSelector = '.valgmid a';
const priceSelector = '#details_price';
const extrasSelector = "[style='margin-bottom:5px;']";
const dataSelector = ".dilarData li";
const titleSelector = 'td > div h1';
const imagesSelector = (title) => `[alt='${title}']`;
const descriptionSelct = "td div"

function getDescription(dom) {
    const divs = dom.querySelectorAll(descriptionSelct);
    for (const div of divs) {
        if (div.textContent === 'Допълнителна информация:') {
            return div.nextElementSibling.querySelector('td').textContent
        }
    }
    return
}

async function download(url, name, next) {
    try {
        const response = await fetch(url);
        const buffer = await response.buffer();
        const newUrl = `${config.host}/uploadImages/${name}`;
        fs.writeFile(`${process.cwd()}/uploadImages/${name}`, buffer, () => {
            console.log(newUrl);
        })
        return newUrl
    } catch (err) {
        console.log(err);
        next(err)
    }
}

async function getImages(dom, title, next) {
    try {
        const newUrls = [];
        const images = dom.querySelectorAll(imagesSelector(title))
        for (const imgTag of images) {
            const src = imgTag.src;
            const url = `https:${src.replace('med', 'big')}`;
            
            newUrls.push(await download(url))
        }
        return newUrls
    } catch (err) {
        console.log(err);
        next(err)
    }
}

async function getData(dom, next) {
    try {
        const title = dom.querySelector(titleSelector).textContent
        const titleArr = title.split(' ');
        const body = dom.querySelectorAll(dataSelector);
        const extras = Array.from(dom.querySelectorAll(extrasSelector))
        const data = {
            brand: titleArr.shift(),
            modification: titleArr.pop(),
            model: titleArr.length > 1 ? titleArr.join(' ') : titleArr[0],
            birdayMonth: body[1].textContent.split(" ")[0],
            birdayYear: Number(body[1].textContent.split(" ")[1].replace('г.', '')),
            engine: body[3].textContent,
            power: Number(body[5].textContent.replace(' к.с.', '')),
            price: Number(dom.querySelector(priceSelector).textContent.replace(' лв.', '').replace(' ', '')),
            eurostandart: body[7].textContent,
            gearbox: body[9].textContent,
            category: body[11].textContent,
            km: Number(body[13].textContent.replace(' км', '')),
            color: body[15].textContent,
            extras: extras.map(extra => extra.textContent.replace('• ', '')),
            description: getDescription(dom),
            images: await getImages(dom, title, next)
        }
        return data
    } catch (err) {
        console.log(err);
        next(err)
    }
}

async function storeData(data, next) {
    try {
        const createdcars = await models.Cars.create(data)
        return createdcars
    } catch (err) {
        console.log(err);
        next(err)
    }
}

async function getDom(url, next) {
    try {
        const response = await fetch(url)
        const newbuffer = await response.arrayBuffer()
        const html = windows1251.decode(Buffer.from(newbuffer).toString('latin1'))
        const dom = new JSDOM(html);
        return dom.window.document
    } catch (err) {
        console.log(err);
        next(err)
    }
}
export default async (req, res, next) => {
    try {
        const dom = await getDom(generalUrl, next)
        const cars = dom.querySelectorAll(carsSelector);
        const resArr = [];
        for (const car of cars) {
            const dom = await getDom(`https:${car.href}`)
            const data = await getData(dom, next);
            resArr.push(await storeData(data, next))
        }
        res.send(resArr)
    } catch (err) {
        console.log(err);
        next(err)
    }
}