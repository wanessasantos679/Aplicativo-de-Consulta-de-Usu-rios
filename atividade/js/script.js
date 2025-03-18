async function buscarUsuario() {
    const userId = document.getElementById('userId').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Limpar resultado anterior
    resultadoDiv.innerHTML = '';

    if (!userId) {
        resultadoDiv.innerHTML = 'Por favor, insira um ID.';
        return;
    }

    try {
        // Realizando a requisição para a API
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // Verificar se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error('Usuário não encontrado');
        }

        // Converte a resposta para JSON
        const usuario = await response.json();
        
        // Exibir as informações do usuário
        resultadoDiv.innerHTML = `
            <h3>Usuário Encontrado:</h3>
            <p><strong>ID:</strong> ${usuario.id}</p>
            <p><strong>Nome:</strong> ${usuario.name}</p>
            <p><strong>Username:</strong> ${usuario.username}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
        `;
    } catch (erro) {
        // Caso ocorra erro (ex: usuário não encontrado)
        resultadoDiv.innerHTML = `<span class="erro">${erro.message}</span>`;
    }
}
