import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCtP8DGbco6a642gfc27YqeW9REEhAnIZs",
  authDomain: "primewrapcar-e8db2.firebaseapp.com",
  projectId: "primewrapcar-e8db2",
  storageBucket: "primewrapcar-e8db2.firebasestorage.app",
  messagingSenderId: "123384128809",
  appId: "1:123384128809:web:604c63b389c3e88493c338",
  measurementId: "G-RT719LYSD5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
