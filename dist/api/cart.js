"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const file = require('../models/file');
const Product = require('../models/products');
const errorList = require('../api/errors');
// router.get('/cart', (req, res) =>{
// })
