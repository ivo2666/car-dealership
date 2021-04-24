import React from 'react';
import Section from '../ContactsSectionLayout';
import content from "./content";
import { LanguageContext } from "../../contexts";

export default () => {
    const language = React.useContext(LanguageContext).language
    return (
        <Section>
            <h2>{content[language].title}</h2>
            <iframe src='https://maps.google.com/maps?q=sofia%20ul%20abagar%2019&t=&z=17&ie=UTF8&iwloc=&output=embed' title='map'>
            </iframe>
        </Section>
    )
}