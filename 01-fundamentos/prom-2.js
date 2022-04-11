
function sumarUno( numero){
    
   /* if(numero >= 7){
        callback('Número muy alto');
        return;
    }*/
    
    var promesa = new Promise(function(resolve, reject) {
        console.log(numero);
        if (numero >= 15) {    
                reject('el numero es muy alto');
        } 
        

    setTimeout( function() {

        //return numero + 1;
        resolve( numero + 1);

    }, 800);

});


    return promesa;
   
}
sumarUno( 5 )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno )
.then( sumarUno )
.then( nuevoNumero =>{
    console.log(nuevoValor);

})

  //  console.log(nuevoNumero);
//});
.catch(error => {
    console.log('error en promesa');
    console.log(error);
});
/*
sumarUno( 5, function(error, nuevoValor) {
  if(error){
      console.log(error);
      return;
  }
sumarUno( nuevoValor, function (error, nuevoValor2 ){
    if(error){
        console.log(error);
        return;
    }
    sumarUno(nuevoValor2, function(error, nuevoValor3){
    if(error){
        console.log(error);
        return;
    }
        console.log(nuevoValor3);
    });

});

} );*/