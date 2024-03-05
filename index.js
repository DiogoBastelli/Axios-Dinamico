const axios = require('axios')
var nome = document.getElementById("nome").value;
const url = `https://api.github.com/users/${nome}/repos`


async function getRepos(){
     axios
     .get(url)
    .then(response =>{
        console.log(response.data)
        console.log('sucesso')
    })
    .catch(e =>{
        console.log(e)
        console.log('Error 404')
    })
    .finally(f =>{
        console.log('finalizou a request')
    })
}

//getRepos()