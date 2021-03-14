import React from 'react';
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
import Service from './service';

export default () => {
    const language = React.useContext(LanguageContext).language
    return (
            <Container>
                <Row>
            <Service href="/services/barter" title={content[language].barter} src={barter} />
            <Service href={`/services/lizing`} title={content[language].leasing} src={lizing} />
            <Service href={`/services/insurance`} title={content[language].insurance} src={insurance} />
            </Row>
            <Row>
            <Service href={`/services/consultation`} title={content[language].consultation} src={consultation} />
            <Service href={`/services/delivery`} title={content[language].delivery} src={delivery} />
            </Row>
            </Container>
    )
}