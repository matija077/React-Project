var helmet = require('helmet');
var express = require('express');


function configServerMiddlewares(app) {
    app.use(helmet());
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
}

function config() {
    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config();
    }
}

config();

Object.assign(module.exports, {configServerMiddlewares});