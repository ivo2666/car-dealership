import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../../../src/App';
import Navigation from '../../../src/router';
import PageLayout from '../../../src/components/pageLayout';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const sheet = new ServerStyleSheet()
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

        try {
            
            // render the app as a string
            const html = ReactDOMServer.renderToString(
                <StyleSheetManager sheet={sheet.instance}>
                <App cars={req.cars} user={req.user}>
                    <StaticRouter location={req.baseUrl}>
                        <PageLayout>
                            <Navigation />
                        </PageLayout>
                    </StaticRouter>
                </App>
                </StyleSheetManager>
            );
            const styleTags = sheet.getStyleTags()

            const htmlWithStyle = htmlData.replace(
                '<style></style>',
                `${styleTags}`
            )

            const htmlWithState = htmlWithStyle.replace(
            'window.__STATE__={}',
            `window.__STATE__=${JSON.stringify({
              user: req.user,
              cars: req.cars
            })}`
          )

        // inject the rendered app into our html and send it
        return res.send(
            htmlWithState.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    } catch (error) {
        next(err)    
    }finally {
        
    } 
    });
}