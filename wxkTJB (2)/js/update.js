import {app , auth , db , storage} from './firebase.mjs'
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged  ,signOut ,updatePassword  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { collection, getDocs ,addDoc, where, query , onSnapshot  ,orderBy , deleteField , updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

onAuthStateChanged(auth, async(user) => {
    if (user) {

var userss = document.getElementById("username")
var pass1 = document.getElementById("pass1")
const q = query(collection(db, "users"), where("email", "==", user.email));
const querySnapshot = await getDocs(q);
querySnapshot.forEach(async(doc) => {
    console.log(doc.data());
    userss.innerText=doc.data().fname + " " + doc.data().lname 
    // const washingtonRef = doc(db, "users", user.uid);
    
    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //     capital: true
    // });
    
})
}
})
var pass2 = document.getElementById("pass2").value
localStorage.setItem("pass2" , JSON.stringify(pass2))
var pass2222 = JSON.parse(localStorage.getItem("pass2"))
if(pass2 == pass2222){
  var pass3 = document.getElementById("pass3").value
  const user = auth.currentUser;
  const newPassword =pass3;
  
  updatePassword(user, newPassword).then(() => {
    // Update successful.
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(()=>{
      window.location.href = "./index.html"
    },3000)
    
  }).catch((error) => {
    // An error ocurred
    // ...
  });
  
}