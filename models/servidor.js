process.loadEnvFile();
require("dotenv-expand").expand({ ignoreProcessEnv: false });
const express=require("express");
const cors=require("cors");

const configurarControladorSocket=require("../sockets/controlador");

class Servidor
{
    //Atributos:

    //Constructores:
    constructor()
    {
        this.puerto=process.env.PUERTO;
        this.rutas  =   {
                        };
        this.app=express();
        this.servidorSocket=require('http').createServer(this.app);
        this.objetoES=require('socket.io')(this.servidorSocket);
        //Middleware:
        this.generarMiddleware();
        //Fin middleware
        //Establecer rutas:
        this.establecerRutas();
        //Sockets
        this.ajustarSockets();
    }
    //Get-Set:
    
    //Métodos:

    generarMiddleware()
    {
        //Activar CORS:
        this.app.use(cors());
        //Establecer carpeta pública:
        this.app.use(express.static("public"));
    }

    establecerRutas()
    {
        //this.app.use(this.rutas.rutaAPIAcceso,require("../routes/acceso"));
    }
    
    ajustarSockets()
    {
        this.objetoES.on('connection', configurarControladorSocket);
    }

    oirPuerto()
    {
        this.servidorSocket.listen(this.puerto,()=>{
            console.log(`Servidor ejecutándose en el puerto ${this.puerto}`);
        });
    }
};

module.exports=Servidor;