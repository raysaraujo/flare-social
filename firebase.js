// Importações do Firebase (SDK modular v9+)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";          // Para autenticação (login)
import { getFirestore } from "firebase/firestore"; // Para banco de dados (Firestore)
import { getStorage } from "firebase/storage";     // Para upload de arquivos (Storage)

// Configuração do SEU projeto (Flare-Social)
const firebaseConfig = {
  apiKey: "AIzaSyANFq8d4MYFTvU7H8wfbg4Qh76eMUXFg3w",
  authDomain: "flare-social-c5895.firebaseapp.com",
  projectId: "flare-social-c5895",
  storageBucket: "flare-social-c5895.appspot.com", // Note: ".appspot.com" é o correto!
  messagingSenderId: "40958715109",
  appId: "1:40958715109:web:5e8ddb3c35d54244a7600c",
  measurementId: "G-WLC2H38G41" // Opcional (Analytics)
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços que você vai usar
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
