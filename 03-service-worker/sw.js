
// Ciclo de vida del SW



self.addEventListener('install', event => {


    console.log('SW: Instalando SW');


setTimeout(()=> {
    console.log('SW:TERMINO INSTALACION');
}, 1);


self.skipWaiting();
});



//SERVICE SE ACTIVA

self.addEventListener('activate', event => {


    //boprra cache viejo
  console.log('SW2: Activo Y Listo para app');
    
});


//FETCH:Petiviones a apis

self.addEventListener('fetch', event => {

    //Aplicar estrategias de cache


//console.log('SW:', event.request.url);

//if(event.request.url.includes('https://reqres.in/api/users') ){

//const resp = new Response (`{ok: false, mensaje: 'jajajaja'}`);

//event.respondWith (resp);

//}

});



//SYNC:Recuperamos la conexion a inteerney

self.addEventListener('sync', event => {



console.log('tenemos conexion');
console.log(event);
console.log(event.tag);

});



//push: manejo

self.addEventListener('push', event=> {


console.log('Notofocacion recibida');

});







