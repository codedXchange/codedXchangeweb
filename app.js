function signup(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

auth.createUserWithEmailAndPassword(email,password)
.then(()=>{

document.getElementById("msg").innerText="Account created"

})

.catch(err=>{

document.getElementById("msg").innerText=err.message

})

}

function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

auth.signInWithEmailAndPassword(email,password)
.then(()=>{

window.location="dashboard.html"

})

}

function logout(){

auth.signOut()
window.location="index.html"

}

auth.onAuthStateChanged(user=>{

if(user){

let el=document.getElementById("userEmail")

if(el){

el.innerText="Logged in as "+user.email

loadTransactions(user)

}

}

})

function submitCard(){

let user=auth.currentUser

let type=document.getElementById("cardType").value
let amount=document.getElementById("amount").value
let code=document.getElementById("cardCode").value

let id=Date.now()

db.ref("transactions/"+id).set({

user:user.uid,
email:user.email,
type:type,
amount:amount,
code:code,
status:"pending"

})

}

function loadTransactions(user){

db.ref("transactions").orderByChild("user").equalTo(user.uid)
.on("value",snap=>{

let html=""

snap.forEach(tx=>{

let data=tx.val()

html+="<li>"+data.type+" $"+data.amount+" - "+data.status+"</li>"

})

document.getElementById("transactions").innerHTML=html

})

}
