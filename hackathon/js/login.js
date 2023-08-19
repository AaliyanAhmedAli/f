import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVXEGWV6axNKaPuKBQFCVAHQcHzIHf2BE",
  authDomain: "hackathon-21048.firebaseapp.com",
  projectId: "hackathon-21048",
  storageBucket: "hackathon-21048.appspot.com",
  messagingSenderId: "973945114064",
  appId: "1:973945114064:web:f02ad63c66bafb13847dd5",
  measurementId: "G-QTZJ5MTFEE" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




document.getElementById('login-btn').addEventListener('click' , (e) => {
  e.preventDefault()
  var email = document.getElementById('email').value ;
  var password = document.getElementById('password').value ;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user,"User Data");
    window.location.href = "../pages/Dashboard.html";
    // window.location.href = '../pages/Dashboard.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error' ,error)
  });
})