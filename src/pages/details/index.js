import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/carSectionH1';
import Layout from '../../components/pageLayout'
import Slideshow from '../../components/detailsSlideshow'
import { Title, CarTable, Description, Extras } from '../../components/carInformation'
//import probe from 'probe-image-size';




//const cloudinaryUpload = (file, preset) => {
//    const formData = new FormData();
//formData.append("file", file);
//formData.append("upload_preset", preset)
//fetch('https://api.cloudinary.com/v1_1/retro-cars/image/upload',{
//    method: 'POST',
//    body: formData
//})
//.then( x => x.json())
//.then(data => console.log(data))    
//}

//cloudinaryUpload('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', 'clientCars')

//probe(`https://res.cloudinary.com/retro-cars/image/upload/v1605297751/cars/qxlzctrkhaqjtpvbjaof.jpg`)
//.then(  
//    result => console.log(result)
//)
    

const Details = styled.main`
margin: 20px 0 20px 2%;
font-size: 17px;
color: #6b6a6b;
font-family: montserat, sans-serif;
line-height: 25.5px;
h1 {
    width: 100%;
}
`

export default () => {
    return(
    <Layout>
        <Details>
            <H1>Car Name</H1>
<Slideshow />
<Title>Допълнителна нформация</Title>
<CarTable />
<Title>Екстри</Title>
<Extras />
<Title>Описание</Title>
<Description>Наличен, Нов внос, Quattro, Автоматична скоростна кутия, LED дневни светлини, Пакет за съхранение, Външни огледала електрически регулируеми с подгряване, дисплей за ограничение на скоростта, Система ISOFIX за детска седалка на предната и задните седалки, Комфортен климатичен контрол 3-зонов, Мултимедиен интерфейс MMI Navigation Plus с MMI Touch, Задна странична въздушна възглавница, Предни седалки ел регулируеми (вляво с памет), Отопление на седалките отпред , Адаптивна спирачна светлина, Управление на приплъзването при шофиране (ASR), Спирачна система със система за рекуперация, Ел. Диференциално заключване (EDS), Система за подпомагане на водача: помощ при стартиране (помощ при задържане), Ел. Стъкла отпред + отзад, Държач за чаши в централната конзола, Задни светлини LED, Седалки ISOFIX за детска седалка, мултифункционален волан, регулируем волан, Сензор за светлина и дъжд, Лети джанти, Централen подлакътник отпред, Многофункционален дисплей / бордов компютър, Audi ексклузив пакет, Индикатор за предупреждение на налягането в гумите, Ниските емисии съгласно стандарта за емисии Euro 6, Предни странични въздушни възглавници, Start/ Stop система, Съединител (12V връзка) в багажното отделение, Лизинг!</Description>
        </Details>
    </Layout>
)}