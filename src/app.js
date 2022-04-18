//crear constante
const express = require('express');
const morgan = require('morgan');
const rutas = require('./rutas');

//instanciar al servidor.
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

app.use(express.json());
app.set('json spaces',2);

//app.use('/api',require('./rutas'));
app.use('/api',rutas);
app.use('/api/clientes/',require('./rutas/rutasClientes'));



//puerto de la aplicacion
app.listen(8392, ()=> {
    console.log("Servidor Isis Zapata iniciado en el puerto 8392");
});