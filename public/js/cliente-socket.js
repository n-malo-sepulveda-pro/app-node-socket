//Referencias HTML
const textoEncendido=document.querySelector("#estado_servidor_on");
const textoApagado=document.querySelector("#estado_servidor_off");
const cuadroMensaje=document.querySelector("#texto_mensaje");
const teclaEnvio=document.querySelector("#bt_envio");
const objetoSocket=io();

objetoSocket.on('connect',()=>{
    textoApagado.style.display="none";
    textoEncendido.style.display="";
});
objetoSocket.on('disconnect',()=>{
    textoEncendido.style.display="none";
    textoApagado.style.display="";
});
objetoSocket.on('enviar-mensaje',(cargaUtil)=>{
    console.log(cargaUtil);
});

if(teclaEnvio)
{
    teclaEnvio.addEventListener('click',()=>{
        const cargaUtil={
            id:'9XuAr48!_',
            mensaje: cuadroMensaje.value,
            fecha: new Date().getTime()
        };
        objetoSocket.emit('enviar-mensaje',cargaUtil,(salida)=>{
            console.log("salida desde el servidor:\n"+salida);
        });
    });
}