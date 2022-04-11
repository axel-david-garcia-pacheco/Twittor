

self.addEventListener('fetch', event => {


//if(event.request.url.includes('.jpg')){  //console.log(event.request.url);
//let fotoReq = fetch ('img/main.jpg');
//let fotoReq = fetch (event.request.url);
//let fotoReq = fetch (event.request);
 //   event.respondWith(fotoReq);
//}

/*
-------------- inter------------
if(event.request.url.includes('style.css')){

    let respuestac= new Response(`
    body{

        background-color: red !important;
        color: pink;

    }
    `, {

headers: {

    'Content-Type':'text/css'
}


    });
    event.respondWith(respuestac);
}
*/

//-----Tarea----
//if(event.request.url.includes('main.jpg')){

//    event.respondWith(fetch('img/main-patas-arriba.jpg') );
//}


const resp = fetch (event.request)
                .then(resp => {

                return resp.ok ? resp: fetch('img/main.jpg'); 
                });


event.respondWith(resp);


} );