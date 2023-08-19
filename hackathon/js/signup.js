// Your web app's Firebase configuration
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, query, where, getDocs, serverTimestamp, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVXEGWV6axNKaPuKBQFCVAHQcHzIHf2BE",
    authDomain: "hackathon-21048.firebaseapp.com",
    projectId: "hackathon-21048",
    storageBucket: "hackathon-21048.appspot.com",
    messagingSenderId: "973945114064",
    appId: "1:973945114064:web:f02ad63c66bafb13847dd5",
    measurementId: "G-QTZJ5MTFEE"
  };


// Initialize Firebase



firebase.initializeApp(firebaseConfig);  
  let auth = firebase.auth();

document.querySelector("#Signup-button").addEventListener('click', (e)=>{
      firebase.auth()
.then((result) => {


// This gives you a Google Access Token. You can use it to access the Google API.
// The signed-in user info.

// funForUserName(result);
console.log();

// IdP data available in result.additionalUserInfo.profile.
// ...
}).catch((error) => {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// The email of the user's account used.
var email = error.email;
// The firebase.auth.AuthCredential type that was used.
var credential = error.credential;
console.log(error)
// ...
});
  })
  
//   function funForUserName(result){
//     console.log(result.user.displayName)
//   }
  firebase.auth().onAuthStateChanged(function(user) {
    // console.log(user.displayName)

    if (user) {
    window.location.href = "../pages/Dashboard.html"
        
    }

  })

  //   ...................login with user and email........................

  document.getElementById("Signup-button").addEventListener("submit",(event)=>{
      event.preventDefault();
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let fullName = document.getElementById('fullName').value
let LName = document.getElementById('LName').value
let RPassword = document.getElementById('RPassword').value

firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
  window.location.href = "../pages/Dashboard.html";
})
.catch((error) => {
  console.log(error);
  
});
  })





  function abc(){

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(uid)
          // ...
        } else {
          // User is signed out
          // ...
        }
      });


}abc()
