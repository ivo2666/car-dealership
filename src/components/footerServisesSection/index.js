import React from 'react';
import Section from '../ContactsSectionLayout';
import Link  from '../../components/link';
import content from "./content";
import { LanguageContext } from "../../contexts";


export default () => {
    const language = React.useContext(LanguageContext).language
    return (
        <Section>
            <h2>{content[language].title}</h2>
            <Link to='/servises/insurance'>{content[language].insurance}</Link>
            <Link to='/servises/barter'>{content[language].barter}</Link>
            <Link to='/servises/consultation'>{content[language].consultation}</Link>
            <Link to='/servises/delivery'>{content[language].delivery}</Link>
            <Link to='/servises/lizing'>{content[language].leasing}</Link>
        </Section>
    )
}