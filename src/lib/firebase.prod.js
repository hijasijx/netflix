import { initializeApp } from "firebase/app";
import "firebase/auth";

//we need to somehow seed the database

//we need config here
const config = {
  apiKey: "AIzaSyCx_9v4-FREzlhqcQ7gzrApV2wwBQucqh0",
  authDomain: "netflix-a5fa8.firebaseapp.com",
  projectId: "netflix-a5fa8",
  storageBucket: "netflix-a5fa8.appspot.com",
  messagingSenderId: "222275761516",
  appId: "1:222275761516:web:0232f4ed0aff464214af49",
};

const firebase = initializeApp(config);

export { firebase };
