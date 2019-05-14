
//  // Your web app's Firebase configuration
//db.collection("contact").get().then((querySnapshot) => {
////alert("Data Recieved");
////productdisplay.innerHTML = "";
////querySnapshot.forEach((doc) => {
////productdisplay.innerHTML += (doc.data().productname + " " + doc.data().productprice +"<br>");
////});
//});


function addData(){

var fname = document.getElementById("first").value;
var lname = document.getElementById("last").value;
var ename = document.getElementById("email").value;
var bname = document.getElementById("business").value;
var text = document.getElementById("textarea").value;
    
db.collection("contact").add({
first: fname,
last: lname,
email: ename,
business: bname,
text: text
})
    
.then(function(docRef) {
    
console.log("Document written with ID: ", docRef.id);
//update the products view
//getProducts();
})
.catch(function(error) {
console.error("Error adding document: ", error);
});
    
alert("Thank You! Your Form has been submitted!");
    document.querySelector(".contact-form form").reset();
    
}





