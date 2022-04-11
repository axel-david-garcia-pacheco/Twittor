

//if  ('serviceWorker' in navigator ){
//    console.log('Podemos usarlo');
//}
 ///confirmado service worker

if (navigator.serviceWorker){

    navigator.serviceWorker.register('./sw.js');
}
