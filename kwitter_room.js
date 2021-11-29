
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCw-ylIsq-YEF4tWu8MkxTJs4lWiKvVSi0",
      authDomain: "kwitter-45b54.firebaseapp.com",
      databaseURL: "https://kwitter-45b54-default-rtdb.firebaseio.com",
      projectId: "kwitter-45b54",
      storageBucket: "kwitter-45b54.appspot.com",
      messagingSenderId: "79249640574",
      appId: "1:79249640574:web:7d52c845618930e2875c2f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 var user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";
    
function add_room(){
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      });
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();
function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}