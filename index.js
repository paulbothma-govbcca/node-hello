/*!
 * Long Service Awards admin web application
 * File: app.js
 * Copyright(c) 2022 BC Gov
 * MIT Licensed
 */

'use strict';

const express = require("express");
const path = require("path");

const db = require("./db");

// replace __dirname for E6
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

const appPort = process.env.LSA_APPS_ADMIN_PORT || 3000;
const username = process.env.USER;

/**
 * Frontend application (Vue) server
 */

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initialize frontend routes
app.use('/', express.static(path.join(__dirname, 'dist')));
// Run API server
app.listen(appPort, () => {
  console.log(`============================================`);
  console.log(`App running on port ${appPort}.`);
  console.log('\t- Serving build at ', path.join(__dirname, 'dist'));
  console.log('\tUser is ' +username);
  
  console.log(`============================================`);

  db.test();
});



// expose application
//export default app;
