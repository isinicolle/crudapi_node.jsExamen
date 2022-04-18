//constante
const ModeloClientes = require('../modelos/modeloClientes');
const {validationResult} = require('express-validator');


//inicio
exports.inicio = (req,res) => 
{
    res.json("Esto es el inicio del modulo de Clientes esta contiene listar , guardar , modificar y eliminar");
};

//listar cliente
exports.listar= async (req,res) => 
{
    const listar = await ModeloClientes.findAll(); //busque a todos
    
    //validacion
    if(listar.length ==0)
    {
        res.send("No existen datos");
    }
    else
    {
        res.json(listar);
    }
};


//guardar cliente
exports.guardar = async (req,res) => 
{//
    const validacion = validationResult(req);
    if(!validacion.isEmpty())
    {
        res.json(validacion.array());
    }
    else
    {
        //capturacion de valores
        const {nombre, apellido} = req.body;
            
        //validacionde nulos
        if(!nombre || !apellido)
        {
            res.send("Debe enviar los datos completos");
        }
        else
        {
            await ModeloClientes .create({
                nombre: nombre,
                apellido: apellido,
            }).then((data)=>{
                console.log(data);
                res.send("Registro almacenado");
            })
            .catch((error)=> {
                console.log(error);
                res.send("Error al guardar los datos");
            });
            
        }

    }
    //
};


//actualizar cliente
exports.modificar = async(req,res) => {
    console.log(req.query);
    console.log(req.body);

    //constantes
    const {id} = req.query;
    const {nombre, apellido} = req.body;
   
    //validacion
    if(!id || !nombre  || !apellido)
    {
        res.send("Envie datos completos");
    }
    else
    {
        var buscar = await ModeloClientes.findOne(
            {
                where:
                {
                    id: id,
                }
            }
        );

        //validar si existe
        if(!buscar)
        {
            res.send("El id no existe");
        }
        else
        {
            buscar.nombre = nombre,
            buscar.apellido = apellido,

            await buscar.save().then((data)=>
            {
                console.log(data);
                res.send("Registro actualizado");
            }).catch((error)=>{
                console.log(error);
                res.send("Error al actualizar los datos");
            })
        }
     
    }

   

};

//eliminar
exports.eliminar = async(req,res) =>
{
    const {id} =req.query;

    if(!id)
    {
        res.send("Envie el id de registro");
    }
    else
    {
            await ModeloClientes.destroy(
            {
                where:
                {
                    id: id,
                }//
            })//
            .then((data)=> {
                console.log(data);

                if(data == 0)
                {
                    res.send("El id no existe");
                }
                else{
                    res.send("Registro elimnado");
                }
                
            })
            .catch((error)=> {
                console.log(error);
                res.send("Error al elimianr el registro");
            });

    }
};
