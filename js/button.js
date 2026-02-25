let buttonCLick = document.getElementById("addToCardBtn");

function buttonClick() {
  alert("Item Successfully Add.")
}



// function greetUser() {
//   let itemName = document.getElementById("username").value;

//   if (itemName === "") {
//     alert("Please enter items");
//   } else {
//     alert(itemName + " is search successfully.");
//   }
// }

function showMessage() {
  let msg = document.getElementById("message");

  // Message देखाउने
  msg.innerHTML = "Successfully Submitted ✅";

  // 5 second पछि हटाउने
  setTimeout(function () {
    msg.innerHTML = "";
  }, 5000);
}