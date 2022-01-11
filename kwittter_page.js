function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyD6jKqqO1HSjfgqptb5-sg5u5vySzKb-Y4",
    authDomain: "project-96-1a5db.firebaseapp.com",
    projectId: "project-96-1a5db",
    storageBucket: "project-96-1a5db.appspot.com",
    messagingSenderId: "242584455136",
    appId: "1:242584455136:web:ca98448fff63ab7a9a4d85",
    measurementId: "G-KMC1YVH271"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.database().ref(room_name).push ({
        name:user_name,
        message:msg,
        like:0
    });