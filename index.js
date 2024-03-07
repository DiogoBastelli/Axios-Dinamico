async function getRepos() {
    try {
        const username = document.getElementById('usuario').value;
        const url = `https://api.github.com/users/${username}/repos`;
        const response = await axios.get(url);
        
        const repos = response.data;
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = ''; // Limpar o conteúdo anterior
        if (repos.length > 0) {
            const reposList = document.createElement('ul');
            repos.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.textContent = repo.name;
                reposList.appendChild(listItem);
            });
            resultadoDiv.appendChild(reposList);
        } else {
            resultadoDiv.textContent = 'Nenhum repositório encontrado.';
        }
        console.log('Sucesso');
    } catch (error) {
        console.error('Erro ao obter repositórios:', error);
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = 'Ocorreu um erro ao buscar os repositórios. Verifique se o nome de usuário está correto.';
    } finally {
        console.log(username);
    }
}
