import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/carSectionH1';
import Layout from '../../components/pageLayout'
import Slideshow from '../../components/detailsSlideshow'
import { Title, CarTable, Description, Extras } from '../../components/carInformation'


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

export default () => (
    <Layout>
        <Details>
            <H1>Car Name</H1>
<Slideshow>
<img src='//mobistatic2.focus.bg/mobile/photosmob/270/1/big/11600440485723270_Mu.jpg' alt='car' />
                    <img src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <img src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='car' />
                    <img src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg' alt='car' />
                    <img src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <img src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='car' />
                    <img src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg' alt='car' />
                    <img src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
                    <img src='https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='car' />
</Slideshow>
<Title>Допълнителна нформация</Title>
<CarTable />
<Title>Екстри</Title>
<Extras />
<Title>Описание</Title>
<Description>Наличен, Нов внос, Quattro, Автоматична скоростна кутия, LED дневни светлини, Пакет за съхранение, Външни огледала електрически регулируеми с подгряване, дисплей за ограничение на скоростта, Система ISOFIX за детска седалка на предната и задните седалки, Комфортен климатичен контрол 3-зонов, Мултимедиен интерфейс MMI Navigation Plus с MMI Touch, Задна странична въздушна възглавница, Предни седалки ел регулируеми (вляво с памет), Отопление на седалките отпред , Адаптивна спирачна светлина, Управление на приплъзването при шофиране (ASR), Спирачна система със система за рекуперация, Ел. Диференциално заключване (EDS), Система за подпомагане на водача: помощ при стартиране (помощ при задържане), Ел. Стъкла отпред + отзад, Държач за чаши в централната конзола, Задни светлини LED, Седалки ISOFIX за детска седалка, мултифункционален волан, регулируем волан, Сензор за светлина и дъжд, Лети джанти, Централen подлакътник отпред, Многофункционален дисплей / бордов компютър, Audi ексклузив пакет, Индикатор за предупреждение на налягането в гумите, Ниските емисии съгласно стандарта за емисии Euro 6, Предни странични въздушни възглавници, Start/ Stop система, Съединител (12V връзка) в багажното отделение, Лизинг!</Description>
        </Details>
    </Layout>
)