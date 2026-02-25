let buttonCLick = document.getElementById("addToCardBtn");

function buttonClick() {
  alert("Item Successfully Add.")
}

let itemName = document.getElementById("searchItem").value;
function searchClick() {
  if (itemName = "") {
    alert("Enter item name or other.");
  } else {
    alert(itemName + "search successfully.")
  };
};


function showMessage() {
  let msg = document.getElementById("message");

  // Message देखाउने
  msg.innerHTML = "Successfully Submitted ✅";

  // 5 second पछि हटाउने
  setTimeout(function () {
    msg.innerHTML = "";
  }, 5000);
}