// const express = require('express')
import express from 'express';
import moduleName from 'module';
const app = express()
const port = 3000
let a = 3

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))