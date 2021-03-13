import React from 'react';
import Section from '../ContactsSectionLayout';
import content  from "./content";
import { LanguageContext } from "../../contexts";

export default () => {
    const language = React.useContext(LanguageContext).language;
    return (
        <Section>
            <h2>{content[language].title}</h2>
            <a href='https://www.google.com/maps/place/%D0%91%D0%B5%D0%BD%D0%B7%D0%B8%D0%BD%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F+%D0%91%D0%B5%D0%BD%D0%B8%D1%82%D0%B0/@42.642637,23.402191,18z/data=!4m5!3m4!1s0x0:0x7ff0b522c4407aaf!8m2!3d42.6426368!4d23.4021911?hl=en'>{content[language].adress}</a>
            <a href='tel:0000'>{content[language].tel1}</a>
            <a href='tel:0000'>{content[language].tel2}</a>
            <a href='mailto:0000'>{content[language].email}</a>
        </Section>
    )
}