import React from 'react';
import Section from '../ContactsSectionLayout';
import Link  from '../link';
import content from "./content";
import { LanguageContext } from "../../contexts";


export default () => {
    const language = React.useContext(LanguageContext).language
    return (
        <Section>
            <h2>{content[language].title}</h2>
            <Link to='/services/insurance'>{content[language].insurance}</Link>
            <Link to='/services/barter'>{content[language].barter}</Link>
            <Link to='/services/consultation'>{content[language].consultation}</Link>
            <Link to='/services/delivery'>{content[language].delivery}</Link>
            <Link to='/services/lizing'>{content[language].leasing}</Link>
        </Section>
    )
}