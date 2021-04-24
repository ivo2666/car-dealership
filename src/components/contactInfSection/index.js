import React from 'react';
import Section from '../ContactsSectionLayout';
import content  from "./content";
import { LanguageContext } from "../../contexts";
import Call from "../callBtn";
import urls from '../../config'

export default () => {
    const language = React.useContext(LanguageContext).language;
    return (
        <Section>
            <h2>{content[language].title}</h2>
            <a href='https://www.google.com/maps/@42.6414771,23.402571,3a,75y,216.13h,90t/data=!3m7!1e1!3m5!1sOezvlxiGFmcff3rdOc3dQQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DOezvlxiGFmcff3rdOc3dQQ%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D216.13199%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?hl=bg'>{content[language].adress}</a>
            <a href='tel:0879680332'>{content[language].tel1}<Call src={`${urls.server}/accept-call.png`}/></a>
            <a href='tel:0878937606'>{content[language].tel2}<Call src={`${urls.server}/accept-call.png`}/></a>
        </Section>
    )
}