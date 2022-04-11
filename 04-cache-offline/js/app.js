

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}



//if (window.caches){


//caches.open('prueba-1');  //prueba caches 

//caches.open('prueba-2'); //prueba caches

//caches.has('prueba-2').then(console.log);  //pregunta con el hasm si existe cacche, si pongo prueba-3 arrojara falso por que no existe dentro del segmento, si pongo prueba-2 arrojara verdadero por que si esta guardado


//caches.delete('prueba-1').then(console.log);

//caches.open('cache-v1.1').then(cache=>{


    //cache.add('/index.html');

  //  cache.addAll([
    //    '/index.html',
      //  '/css/style.css',
    //    '/img/main.jpg',
   // ]) .then(()=>{

//cache.delete('/css/style.css');

     //   cache.put('index.html', new Response ('hola mundo'));



//});



//cache.match('/index.html')
//.then(res => {

    //res.text().then(console.log);
    //});
//});


//caches.keys().then(keys =>{ 
  //  console.log(keys);
//});



//};


















