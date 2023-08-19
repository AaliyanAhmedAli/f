import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, query, where, getDocs, serverTimestamp, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAvCtrHrZ9Axf00FsbV55pWhAdIhxgHnQ",
    authDomain: "hackathon-39d98.firebaseapp.com",
    projectId: "hackathon-39d98",
    storageBucket: "hackathon-39d98.appspot.com",
    messagingSenderId: "712651049178",
    appId: "1:712651049178:web:ef9d4e7218e29a55327de3",
    measurementId: "G-PZVZ8N3ZE9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const postsList = document.getElementById('posts-list');
const addPostBtn = document.getElementById('add-post-btn');

// Function to render blog posts
// function renderPosts(posts) {
//     postsList.innerHTML = '';
//     posts.forEach(post => {
//         const postDiv = document.createElement('div');
//         postDiv.className = 'post';
//         postDiv.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.content}</p>
//         `;
//         postsList.appendChild(postDiv);
//     });
// }

// // Fetch and display posts from Firestore
// function fetchPosts() {
//     db.collection('posts').get()
//         .then(snapshot => {
//             const posts = snapshot.docs.map(doc => doc.data());
//             renderPosts(posts);
//         })
//         .catch(error => console.error('Error fetching posts:', error));
// }

// // Fetch posts on page load
// fetchPosts();

// // Add event listener to "Add New Post" button
// addPostBtn.addEventListener('click', () => {
//     const title = prompt('Enter post title:');
//     const content = prompt('Enter post content:');

//     if (title && content) {
//         db.collection('posts').add({
//             title: title,
//             content: content
//         })
//         .then(() => {
//             console.log('Post added successfully');
//             fetchPosts(); // Refresh posts after adding a new one
//         })
//         .catch(error => console.error('Error adding post:', error));
//     } else {
//         alert('Both title and content are required.');
//     }
// });




document.addEventListener("DOMContentLoaded", () => {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "your-api-key",
        authDomain: "your-auth-domain",
        projectId: "your-project-id",
        storageBucket: "your-storage-bucket",
        messagingSenderId: "your-messaging-sender-id",
        appId: "your-app-id",
        measurementId: "your-measurement-id"
    };
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    const messagesContainer = document.getElementById("messages");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");

    // Listen for changes in the Firestore collection
    db.collection("messages").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                const message = change.doc.data();
                addMessage(change.doc.id, message.text);
            }
            if (change.type === "modified") {
                const message = change.doc.data();
                updateMessage(change.doc.id, message.text);
            }
            if (change.type === "removed") {
                removeMessage(change.doc.id);
            }
        });
    });

    sendButton.addEventListener("click", () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            sendMessage(messageText);
            messageInput.value = "";
        }
    });

    function sendMessage(text) {
        db.collection("messages").add({
            text: text,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    function addMessage(id, text) {
        const messageElement = createMessageElement(id, text);
        messagesContainer.appendChild(messageElement);
    }

    function createMessageElement(id, text) {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.id = id;

        const messageTextElement = document.createElement("p");
        messageTextElement.textContent = text;
        messageElement.appendChild(messageTextElement);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editMessage(id, text));
        messageElement.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteMessage(id));
        messageElement.appendChild(deleteButton);

        return messageElement;
    }

    function editMessage(id, text) {
        const newText = prompt("Edit the message:", text);
        if (newText !== null) {
            db.collection("messages").doc(id).update({
                text: newText
            });
        }
    }

    function updateMessage(id, newText) {
        const messageElement = document.getElementById(id);
        messageElement.querySelector("p").textContent = newText;
    }

    function deleteMessage(id) {
        if (confirm("Are you sure you want to delete this message?")) {
            db.collection("messages").doc(id).delete();
        }
    }

    function removeMessage(id) {
        const messageElement = document.getElementById(id);
        if (messageElement) {
            messagesContainer.removeChild(messageElement);
        }
    }
});
