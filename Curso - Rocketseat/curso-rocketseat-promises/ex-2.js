/*Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.*/

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
    for (repo of repositories) {
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function listRepositories() {
    var user = inputElement.value;

    if (!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepositories(response.data);
        });
}
