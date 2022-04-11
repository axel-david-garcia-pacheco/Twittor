

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg=> {
 //           setTimeout(()=>{
 //               reg.sync.register('poste-gatitos');
 //               console.log('Se enviaron fotos al servidore');
//

   //         },3000);

    });
    Notification.requestPermission().then(result=>{
    
        console.log(result);
    
        
    
    
    
    });






}




//if ( window.SyncManager ){}




//fetch('https://reqres.in/api/users')
//.then(resp=> resp.text())
//.then(console.log);
