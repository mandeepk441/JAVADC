
const firebaseConfig = {
    apiKey: "AIzaSyAkNwDhoCUr_aQTrp4XBCnCzVDNfcyL0AA",
    authDomain: "teamoutlaw-27998.firebaseapp.com",
    projectId: "teamoutlaw-27998",
    storageBucket: "teamoutlaw-27998.appspot.com",
    messagingSenderId: "1038510861301",
    appId: "1:1038510861301:web:91fec86f665316dc46cebc"
  };
  
  // Initialize Firebase
  firebase = firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()

document.getElementById("form").addEventListener("click", submit);

function getInputVal(id){
    return document.getElementById(id).value
}
var views = 0;
async function yeah()
{
     await db.collection("stats").doc("views").get().then(snapshot =>{ views = snapshot.data().views})
     db.collection("stats").doc("views").update({
         views: views+1
     })
     document.getElementById("views").setAttribute("data-number",views.toString())
}



function submit(e){
    e.preventDefault()
    var name = getInputVal("name")
    var email = getInputVal("email")
    var message = getInputVal("message")
    // var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(name == "" || email == "" || message == ""){
        alert("Missing Data")
    }
    else{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){

            db.collection("feedback").add({
                "name":name,
                "email":email,
                "message":message
            })
        }
        else{
            alert("Wrong Email")
    
        }

    }
    
 

}   