import React from 'react';
import Container from './styledCont'
import { Row } from 'react-bootstrap'
import content from './content'
import { LanguageContext } from "../../../contexts";
import Service from './service';

export default () => {
    const language = React.useContext(LanguageContext).language
    return (
            <Container>
                <Row>
            <Service href="/services/barter" title={content[language].barter} src='services png/barter.png' />
            <Service href={`/services/lizing`} title={content[language].leasing} src='services png/lizing.png' />
            <Service href={`/services/insurance`} title={content[language].insurance} src='services png/insurance.png' />
            </Row>
            <Row>
            <Service href={`/services/consultation`} title={content[language].consultation} src='services png/consultation.png' />
            <Service href={`/services/delivery`} title={content[language].delivery} src='services png/delivery.png' />
            </Row>
            </Container>
    )
}