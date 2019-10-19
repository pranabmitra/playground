import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getFacts from './src/facts';
import express from 'express';
import fs from 'fs';


const port = 3000;
const index = fs.readFileSync(__dirname + '/../public/index.html', 'utf8');

const app = express();
app.get('**', (req, res) => {
    getFacts().then(facts => {
        const html = renderToString(<App facts={facts} />);
        const finalHtml = index.replace('<!-- ::APP::  -->', html);
        res.set('Cache-control', 'public max-age=600 s-max-age=1200');
        res.send(finalHtml); 
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
