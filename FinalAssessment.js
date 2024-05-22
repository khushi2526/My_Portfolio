function Validate()
{
var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
if(regEx.test(document.getElementById('postalcode').value))
{
   return regEx;
}
else
{
alert("Invalid Postal Code");
}
}

function createInput() {
   var x = document.createElement("INPUT");
   x.setAttribute("type", "text");
   x.setAttribute("placeholder", "Enter Language");
   document.body.appendChild(x);
 }