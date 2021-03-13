import React from 'react';
import PageLayot from '../../../components/pageLayout'
import Container from './styledCont'
import { Row } from 'react-bootstrap'
import content from './content'
import { LanguageContext } from "../../../contexts";
import {
    insurance,
    lizing,
    barter,
    consultation,
    delivery

} from '../../../images/services png'; 
import Servise from './servise';

export default () => {
    const language = React.useContext(LanguageContext).language
    return (
        <PageLayot>
            <Container>
                <Row>
            <Servise href="/servises/barter" title={content[language].barter} src={barter} />
            <Servise href={`/servises/lizing`} title={content[language].leasing} src={lizing} />
            <Servise href={`/servises/insurance`} title={content[language].insurance} src={insurance} />
            </Row>
            <Row>
            <Servise href={`/servises/consultation`} title={content[language].consultation} src={consultation} />
            <Servise href={`/servises/delivery`} title={content[language].delivery} src={delivery} />
            </Row>
            </Container>
        </PageLayot>
    )
}