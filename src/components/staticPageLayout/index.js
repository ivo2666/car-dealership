import React from 'react';
import Container from './styledCont'
import { LanguageContext } from "../../contexts";
import urls from '../../config'



export default (props) => {
    const language = React.useContext(LanguageContext).language
    return (
            <Container background={`url(${urls.server}/Bugatti-Chiron.jpg)`}>
            <div className='content'>
            <div className='text'>
    <h2>{props.content[language].title}</h2>
    <p>{props.content[language].body}</p>
            </div>
        </div>
            </Container>
    )
}