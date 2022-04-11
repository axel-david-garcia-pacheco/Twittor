//peticion post
//https://reqres.in/api/user



let usuario = {
    nombre: 'Axel',
    edad: 25
};


fetch('https://reqres.in/api/user', {
    method: 'POST', //put
    body: JSON.stringify( usuario ), //data
    headers:{
        'Content-Type': 'application/json'

    }
})
.then(resp=> resp.json())
.then(console.log)
.catch(error=>{
    console.log('Error en aplicacion');
    console.log(error);

}) ;