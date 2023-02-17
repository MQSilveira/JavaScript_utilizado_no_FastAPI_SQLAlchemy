
// CONSOLE LOG PARA SABER SE ESTÁ EXECUTANDO
console.log('EXECUTANDO')


// FUNÇÃO UTILIZADA PARA PEGAR TODOS OS OBJETOS
function get_all() {

    var url = 'http://127.0.0.1:8000/api/v1'

    let id = document.getElementById('objeto_busca');

    url += `/${id.name}`

    fetch(url)

        .then(response => response.text())
        .then(text => {

            let dados = JSON.parse(text)

            let tbody = document.getElementById(id.name)

            dados.forEach(objeto => {
                tbody.innerHTML += `
            <tr>
                <td>${objeto.id}</td>
                <td>${objeto.nome}</td>
                <td>${objeto.email}</td>
                <td><a href="../html/salvar/salvar-professor.html?id=${objeto.id}">Editar</a> | 
                <button onclick='deletar(${objeto.id})'>Apagar</button>
                </td>
            </tr>`});
        })
}


// PESQUISA POR ID
function pesquisa() {

    var url = 'http://127.0.0.1:8000/api/v1'

    let id = document.getElementById('objeto_busca');
    // id.value == id da pesquisa
    // id.name == name atribuido na tag

    if (id.value === '') {
        return;
    }

    else {
        // ATRIBUINDO ID AO ENDPOINT
        url += `/${id.name}/${id.value}`
    }

    // MOSTRAR URL/ENDPOINT
    console.log(url)

    fetch(url)
        .then(response => response.text())
        .then(function (text) {

            let tbody = document.getElementById(id.name)
            let objeto = JSON.parse(text);

            tbody.innerHTML = `
        <tr>
            <td>${objeto.id}</td>
            <td>${objeto.nome}</td>
            <td>${objeto.email}</td>
            <td><a href="../html/salvar/salvar-professor.html?id=${objeto.id}">Editar</a> | 
            <button onclick='deletar(${objeto.id})'>Apagar</button>
            </td>
        </tr>`});
}


function get_by_id(id_professor) {
    let professor = fetch(`http://127.0.0.1:8000/api/v1/professores/${id_professor}`)

        .then(response => response.text())
        .then(function (text) {
            return JSON.parse(text);
        });

    return professor;
}


function carrega_objeto(id_objeto) {

    console.log(id_objeto.name)

    get_by_id(id_objeto).then(professor => {
        document.getElementById("id").value = professor.id;
        document.getElementById("nome").value = professor.nome;
        document.getElementById("email").value = professor.email;
    });
}


function salvar() {
    let id = document.getElementById('id').value;
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (id != ''){
        professor = {'id':id, 'nome':nome, 'email':email}
        update(professor);
    }
    else{
        professor = {'nome':nome, 'email':email}
        novo(professor);
    }
}


function novo(professor){
    let confirma = document.getElementById("confirma");
    fetch(`http://127.0.0.1:8000/api/v1/professores`,{
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(professor)
    })
    .then(response => {
        if(response.status == 201){
         
            confirma.innerHTML = "Professor criado com sucesso!";
        }else{
            confirma.innerHTML = "Erro!";
        }
    })
 }


function update(professor){
    let confirma = document.getElementById('confirma');
    fetch(`http://127.0.0.1:8000/api/v1/professores/${professor.id}`,{
        method:`PUT`,
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(professor)
    })
    .then(response => {
        if (response.status == 202){
            confirma.innerHTML = 'Alterado com sucesso!';
        }
        else{
            confirma.innerHTML = 'Erro!';
        }
    })
}


function deletar(id){
    fetch(`http://127.0.0.1:8000/api/v1/professores/${id}`,{
        method:`DELETE`,
        headers:{
            'Accept':'application/json'
        }
    })
    .then(response => {
        if (response.status == 204){
            location.replace("professores.html", "_self");
        }
        else{
            alert('Erro!');
        }
    })
}


// CHAMANDO A FUNÇÃO
get_all()
