// Mensagem de boas-vindas
document.addEventListener('DOMContentLoaded', () => {
    console.log('Flare carregado com sucesso!');
    
    // Exemplo de interação
    const titulo = document.querySelector('h1');
    titulo.addEventListener('click', () => {
        alert('Você clicou no título!');
    });
});
