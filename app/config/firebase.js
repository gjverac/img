import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-X1J95sr7g-4zfVJvSL4UywVNjhG_bSo",
  authDomain: "clic-app-ef56d.firebaseapp.com",
  projectId: "clic-app-ef56d",
  storageBucket: "clic-app-ef56d.appspot.com",
  messagingSenderId: "233088680859",
  appId: "1:233088680859:web:2c47c7194c17a7243ad73e"
};

const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);
export default firebaseConfig;
export const db=getFirestore(app);