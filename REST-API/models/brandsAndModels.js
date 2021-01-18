const oldData = require('./modelData');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;

const modelSchema = new Schema({
    brand: {
        type: String
    },
    models : {
        type: Array
    }
})

const brandSchema = new Schema({
    brands: {
        type: Array
    }
})
let model = new Model('model', modelSchema) 
let brand = new Model('brand', brandSchema)
//

let brands = [];

function dataArr(data) {
    let result = [];
    for (const [key, value] of Object.entries(data)) {
        let unModels = [];
        for (const v of Object.values(value)) {
            unModels.push(v)
        }
        result.push({brand: key, models: unModels.sort()})
        model.create({brand: key, models: unModels.sort()})
    }
    return result
}

function myFormat(data) {
    let dataObj = {};
data.map(item => {
if(!dataObj.hasOwnProperty(item.brand)) {
   dataObj[item.brand] = {};
   brands.push(item.brand)
}
if (!dataObj[item.brand].hasOwnProperty(item.model)) {
    dataObj[item.brand][item.model] = item.model;
}

})
return dataObj
}

//myFormat(oldData)


//myData.map(brand => {
//    return model.create({brand})
//})

//brand.create({brands})

const createData =  function () {
    const data = myFormat(oldData);
    dataArr(data)
    return brand.create({'brands': brands})
}

module.exports = {
    createData,
    brand,
    model
}

