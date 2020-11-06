import React from 'react';
import styled from 'styled-components';

const CarInformation = styled.div`
ul {
    display: flex;
    li {
    font-weight: 700;
    list-style-type: none;
    margin-right: 20px;
    font-size: 17px;
    color: #6b6a6b;
    font-family: montserat, sans-serif;
    cursor: pointer;
    &:hover {
        color: #515151;
    }
    }
}
`

const CarInfNav = () => (
    <ul>
<li>Описание</li>
<li>Допълнителна информация</li>
<li>екстри</li>
</ul>
)

const Description = styled.p`
color: #4f4f4f;
line-height: 31px;
`

export default () => {
    return (
        <CarInformation>
            <CarInfNav />
            <Description>Наличен, Нов внос, Quattro, Автоматична скоростна кутия, LED дневни светлини, Пакет за съхранение, Външни огледала електрически регулируеми с подгряване, дисплей за ограничение на скоростта, Система ISOFIX за детска седалка на предната и задните седалки, Комфортен климатичен контрол 3-зонов, Мултимедиен интерфейс MMI Navigation Plus с MMI Touch, Задна странична въздушна възглавница, Предни седалки ел регулируеми (вляво с памет), Отопление на седалките отпред , Адаптивна спирачна светлина, Управление на приплъзването при шофиране (ASR), Спирачна система със система за рекуперация, Ел. Диференциално заключване (EDS), Система за подпомагане на водача: помощ при стартиране (помощ при задържане), Ел. Стъкла отпред + отзад, Държач за чаши в централната конзола, Задни светлини LED, Седалки ISOFIX за детска седалка, мултифункционален волан, регулируем волан, Сензор за светлина и дъжд, Лети джанти, Централen подлакътник отпред, Многофункционален дисплей / бордов компютър, Audi ексклузив пакет, Индикатор за предупреждение на налягането в гумите, Ниските емисии съгласно стандарта за емисии Euro 6, Предни странични въздушни възглавници, Start/ Stop система, Съединител (12V връзка) в багажното отделение, Лизинг!</Description>
        </CarInformation>    
    )
    
}