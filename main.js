// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCCk-98rmIt-ikql-kppjGkV4x8AMfu2mU",
    authDomain: "auth-system-7fa3a.firebaseapp.com",
    databaseURL: "https://auth-system-7fa3a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "auth-system-7fa3a",
    storageBucket: "auth-system-7fa3a.appspot.com",
    messagingSenderId: "393568344791",
    appId: "1:393568344791:web:2b3f86f552bf23f9332e92",
    measurementId: "G-XL6X0KZHEW"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}