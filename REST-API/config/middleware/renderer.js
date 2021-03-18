import React from 'react'
import ReactDOMServer from 'react-dom/server'
// import our main App component
import App from '../../../src/App';
//import Home from '../../../src/pages/home';
import Navigation from '../../../src/router';
import PageLayout from '../../../src/components/pageLayout';
import { StaticRouter } from 'react-router-dom';


const path = require("path");
const fs = require("fs");


export default (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(
        <App>
            <StaticRouter>
                <PageLayout>
            <Navigation />
            </PageLayout>
            </StaticRouter>
        </App>
        );

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
}