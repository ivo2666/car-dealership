import React from 'react';
import background from '../../images/forUsMercedes.jpg'
import styled from 'styled-components';
import Layout from '../../components/pageLayout';

const Page = styled.main`
width: 100%;
background-image: url(${background});
background-size: 100% 100%;
background-repeat: no-repeat;

.content {
    height: 700px;
    background: rgba(0, 0, 0, 0.8);
    font-family: "Roboto Condensed", sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    //align-items: center;
}

h2 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 40px;
}

.text {
    width: 65%;
    font-size: 20px;
    line-height: 38px;
    margin-top: 80px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 80px;
}
`

export default () => {
    return (
        <Layout>
            <Page>
            <div className='content'>
            
            <div className='text'>
            <h2>ЗА НАС</h2>
            <p>
В автокъщата на LS Auto ще откриете използвани автомобили за различни цели.
Нашето намерение е да Ви осигурим високо качествено обслужване.
Също така се грижим и за вашата сигурност, като не правим никакъв компромис с техническата изправност на предлаганите от нас автомобили.
На този сайт ще откриете реални снимки и точна информация за състоянието на всяка от наличните коли. 
Разполагаме с опит от над 20 години в сферата и бихме могли да Ви помогнем при закупуването на чисто ново превозно средство.
Партньорите ни могат да Ви осигурят лизинг с индивидуална оферта според възможностите на всеки от Вас.
Ако искате да продадете старата си кола, заповядайте и
след като обсъдим пазарната ситуация ще Ви направим оферта.<br/>Ние ще се погрижим да откриете това, което търсите!
 </p>
            </div>
        </div>
            </Page>
        </Layout>
    )
}