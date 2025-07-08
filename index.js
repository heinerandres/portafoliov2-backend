const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
try{
    app.use(express.json());
    app.use(cors());

    app.use(express.static('public'));

    app.use('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

    app.use('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });


    app.listen( 8080, () => {
        console.log("Servidor listo en el puerto 8080");
    });
}
catch(error){
    console.log( error );
    throw new Error ( 'Error a la hora de inicializar la BD' );
}

