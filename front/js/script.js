

// CONSOLE LOG PARA SABER SE ESTÁ EXECUTANDO
console.log('EXECUTANDO')

// // FUNÇÃO UTILIZADA PARA PEGAR TODOS OS OBJETOS
function get_all() {


//     var url = 'http://127.0.0.1:8000/api/v1'

//     let id = document.getElementById('objeto_busca');

//     url += `/${id.name}`

//     fetch(url)

//         .then(response => response.text())
//         .then(text => {

//             let dados = JSON.parse(text)

//             let tbody = document.getElementById(id.name)

//             dados.forEach(objeto => {
//                 tbody.innerHTML += `
//             <tr>
//                 <td>${objeto.id}</td>
//                 <td>${objeto.nome}</td>
//                 <td>${objeto.email}</td>
//                 <td><a href="salvar-alterar.html?id=${objeto.id}">Editar</a> | 
//                 <button onclick='deletar($objeto.id})'>Apagar</button>
//                 </td>
//             </tr>`});
//         })
}


// PESQUISA POR ID
function pesquisa() {

//     var url = 'http://127.0.0.1:8000/api/v1'

//     let id = document.getElementById('objeto_busca');
//     // id.value == id da pesquisa
//     // id.name == name atribuido na tag

//     if (id.value === '') {
//         return;
//     }

//     else {
//         // ATRIBUINDO ID AO ENDPOINT
//         url += `/${id.name}/${id.value}`
//     }

//     // MOSTRAR URL/ENDPOINT
//     console.log(url)

//     fetch(url)
//         .then(response => response.text())
//         .then(function (text) {

//             let tbody = document.getElementById(id.name)
//             let objeto = JSON.parse(text);

//             tbody.innerHTML = `
//         <tr>
//             <td>${objeto.id}</td>
//             <td>${objeto.nome}</td>
//             <td>${objeto.email}</td>
//             <td><a href="salvar-alterar.html?id=${objeto.id}">Editar</a> | 
//             <button onclick='remove($objeto.id})'>Apagar</button>
//             </td>
//         </tr>`});
}



// CHAMANDO A FUNÇÃO
get_all()







// then condicional de acesso
// 