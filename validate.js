function validateForm() {
  var name = document.forms["myForm"]["fname"].value;

  if (name == "") {
    alert("Name must be filled out");
    //return false;
  } else {
    alert("Hello " + name);
  }
}
