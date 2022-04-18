const { Router } = require('express');
const controladorClientes= require('../controladores/controladorClientes');
const router = Router();

//validaciones
const {body,query} = require('express-validator');

//trabajando con rutas
router.get('/', controladorClientes.inicio);

//listar
router.get('/listar',  controladorClientes.listar);

//guardar
router.post('/guardar',
body('nombre').isLength({max:45}).withMessage('El nombre solo se le permiten 45 caracteres max'),
body('apellido').isLength({max:45}).withMessage('El apellido solo se le permiten 45 caracteres max')
,controladorClientes.guardar);

//actualizar nombre
router.put('/modificar',controladorClientes.modificar);

//eliminar
router.delete('/eliminar', controladorClientes.eliminar);

module.exports=router; 