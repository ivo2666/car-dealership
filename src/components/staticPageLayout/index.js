import React from 'react';
import Container from './styledCont'
import urls from '../../config'
import { LanguageContext } from "../../contexts";



export default (props) => {
    const language = React.useContext(LanguageContext).language
    return (
            <Container background={`url(${`${urls.server}/uploadImages/Bugatti-Chiron.jpg`})`}>
            <div className='content'>
            <div className='text'>
    <h2>{props.content[language].title}</h2>
    <p>{props.content[language].body}</p>
            </div>
        </div>
            </Container>
    )
}