import React from 'react';
import Header from '../header';

const PageLayout = (props) => {
    return (
        <>
        <Header />
        {props.children}
        </>
    )
}

export default PageLayout