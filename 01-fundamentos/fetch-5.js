


fetch('https://reqres.in/api/users/1000')
.then(resp=> { 
    

//console.log(resp);

if(resp.ok){
 return resp.json();
}else{


throw new Error('No existe el usuario 1000');


}



//console.log('No existe el usuario 1000');



//}


    //resp.json().then(console.log);
    



}) 
.then(console.log)
.catch(error => {
        console.log('error en la peticion');
        console.log(error);
});



