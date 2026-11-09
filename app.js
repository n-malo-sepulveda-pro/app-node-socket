const Servidor=require("./models/servidor");

const main=()=>{
    const objServidor=new Servidor();
    objServidor.oirPuerto();
};

main();