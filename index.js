require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const { dbConnect } = require('./config/db');
const app = express();

// CONFIGURAR CORS
app.use( cors());

//LECTURA Y PARSEO DEL BODY
app.use(express.json());

// BASE DE DATOS
dbConnect();

// ROUTES
app.use('/api/goty', require('./routes/goty'));


app.listen( process.env.PORT, () => {
	console.log('Servidor corriendo en puerto' , process.env.PORT);
});