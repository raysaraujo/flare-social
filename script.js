// Mensagem de boas-vindas
document.addEventListener('DOMContentLoaded', () => {
    console.log('Flare carregado com sucesso!');
    
    // Exemplo de interação
    const titulo = document.querySelector('h1');
    titulo.addEventListener('click', () => {
        alert('Você clicou no título!');
    });
});

// Função para publicar um novo post
function publicarPost() {
  const textoPost = document.getElementById('texto-post').value;
  const feed = document.getElementById('feed');

  if (textoPost) {
    const novoPost = document.createElement('div');
    novoPost.classList.add('post');
    novoPost.innerHTML = `
      <p>${textoPost}</p>
      <div class="post-actions">
        <button onclick="curtirPost(this)">Curtir</button>
      </div>
    `;
    feed.prepend(novoPost);
    document.getElementById('texto-post').value = '';  // Limpa a área de texto
  } else {
    alert("Digite algo para publicar!");
  }
}

// Função para curtir o post
function curtirPost(button) {
  button.textContent = "Curtido!";
  button.style.backgroundColor = "#4CAF50"; // Muda cor do botão
}
