// Mensagem de boas-vindas
document.addEventListener('DOMContentLoaded', () => {
    console.log('Flare carregado com sucesso!');
    
    // Exemplo de interação
    const titulo = document.querySelector('h1');
    titulo.addEventListener('click', () => {
        alert('Você clicou no título!');
    });
});

// Importando Firebase
import { db } from './firebase'; // Assumindo que o firebase.js está no mesmo diretório
import { collection, addDoc } from "firebase/firestore";

// Função para publicar um novo post
async function publicarPost() {
  const textoPost = document.getElementById('texto-post').value;
  const feed = document.getElementById('feed');

  if (textoPost) {
    // Criando um novo post no Firestore
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        content: textoPost,
        timestamp: new Date() // Armazenando o tempo em que o post foi feito
      });
      console.log("Post publicado com ID:", docRef.id);

      // Adicionando o post no feed localmente também
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
    } catch (e) {
      console.error("Erro ao publicar o post:", e);
      alert("Houve um erro ao publicar seu post. Tente novamente!");
    }
  } else {
    alert("Digite algo para publicar!");
  }
}

// Função para curtir o post
function curtirPost(button) {
  button.textContent = "Curtido!";
  button.style.backgroundColor = "#4CAF50"; // Muda cor do botão
}
