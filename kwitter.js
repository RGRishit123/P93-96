 var firebaseConfig = {
    apiKey: "AIzaSyC2I7YAbTPcYcvQI3TWTK1_rmEHrdCt-BE",
    authDomain: "kwitter-d455d.firebaseapp.com",
    databaseURL: "https://kwitter-d455d-default-rtdb.firebaseio.com",
    projectId: "kwitter-d455d",
    storageBucket: "kwitter-d455d.appspot.com",
    messagingSenderId: "269914396242",
    appId: "1:269914396242:web:07b92be57673ebc503718b"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  

function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
}