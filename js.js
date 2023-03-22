

function validateForm() {
  let x = document.getElementById("email").value;
  let y = document.getElementById("pwd1").value;
  console.log(x);
  console.log(y);
  if (x == "") {
    document.getElementById("emyForm").style.display = "block";
  }
  else if (y == "") {
    document.getElementById("emyForm").style.display = "block";
  }
  else {
    document.getElementById("myForm").style.display = "block";
  }
}

function closeForm() {
  document.getElementById("emyForm").style.display = "none";
  document.getElementById("myForm").style.display = "none";

}


