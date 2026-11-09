const configurarControladorSocket=(objetoSocket)=>{
    console.log(`Cliente conectado ${objetoSocket.id}`);
    objetoSocket.on('disconnect',()=>{
        console.log(`Cliente desconectado ${objetoSocket.id}`);
    });
    objetoSocket.on('enviar-mensaje',(cargaUtil,callback)=>{
        const idMensaje='6ab992eea5';
        callback(idMensaje);
        objetoSocket.broadcast.emit('enviar-mensaje',cargaUtil);
    });
};

module.exports  =   configurarControladorSocket;