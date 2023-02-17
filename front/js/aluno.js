
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
                <td><a href="../html/salvar/salvar-aluno.html?id=${objeto.id}">Editar</a> | 
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
            <td><a href="../html/salvar/salvar-aluno.html?id=${objeto.id}">Editar</a> | 
            <button onclick='remove($objeto.id})'>Apagar</button>
            </td>
        </tr>`});
}


function get_by_id(id_aluno) {
    let aluno = fetch(`http://127.0.0.1:8000/api/v1/alunos/${id_aluno}`)

        .then(response => response.text())
        .then(function (text) {
            return JSON.parse(text);
        });

    return aluno;
}


function carrega_objeto(id_objeto) {

    console.log(id_objeto.name)

    get_by_id(id_objeto).then(aluno => {
        document.getElementById("id").value = aluno.id;
        document.getElementById("nome").value = aluno.nome;
        document.getElementById("email").value = aluno.email;
    });
}


function salvar() {
    let id = document.getElementById('id').value;
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (id != ''){
        aluno = {'id':id, 'nome':nome, 'email':email}
        update(aluno);
    }
    else{
        aluno = {'nome':nome, 'email':email}
        novo(aluno);
    }
}


function novo(aluno){
    let confirma = document.getElementById("confirma");
    fetch(`http://127.0.0.1:8000/api/v1/alunos`,{
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    })
    .then(response => {
        if(response.status == 201){
         
            confirma.innerHTML = "Aluno criado com sucesso!";
        }else{
            confirma.innerHTML = "Erro!";
        }
    })
}


function update(aluno){
    let confirma = document.getElementById('confirma');
    fetch(`http://127.0.0.1:8000/api/v1/alunos/${aluno.id}`,{
        method:`PUT`,
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(aluno)
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
    fetch(`http://127.0.0.1:8000/api/v1/alunos/${id}`,{
        method:`DELETE`,
        headers:{
            'Accept':'application/json'
        }
    })
    .then(response => {
        if (response.status == 204){
            location.replace("alunos.html", "_self");
        }
        else{
            alert('Erro!');
        }
    })
}


// CHAMANDO A FUNÇÃO
get_all()
