# ExamenPM2_IParcial
Examen del I Parcial I periodo 2022 de la clase Programación Móvil II

Enunciado: 
Diseñe una api cuyo numero de puerto sean los últimos 4 dígitos de su numero de cuenta. El servidor al iniciar deberá mostrar un mensaje con su nombre en la consola "Servidor de Carlos Flores iniciado en el 0000". Utilizar las tablas de clientes. Su proyecto debe llamarse Exa_Iniciales ejemplo Exa_CAFF.

Deberá tener las siguientes rutas:
/api/. Envira un json con su nombre, sección y clase.
/api/clientes. Enviara un mensaje o json "Modulo moneda" y las rutas configuradas en esta modulo.
/api/clientes/listar. Envira un json con la lista de clientes.
/api/clientes/guardar. Debe validar el campo nombre antes de guardar los datos y enviara un mensaje indicando que se ha guardado.
/api/clientes/eliminar/. Debe enviar el id para poder elimina el cliente y enviara un mensaje indicando que se ha eliminado.
/api/clientes/modificar/. Deba validar el id y nombre para modificar el nombre y enviara un mensaje indicando que se ha modificado.
Al enviarlo debe comprimirlo sin subir la carpeta node_modules.
