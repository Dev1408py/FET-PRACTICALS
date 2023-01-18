alert("Hello user.");

let nation = prompt("Enter you'r Nationality:");
let no_c = prompt("Enter the no. of vaccine doses you have taken.");
if(no_c<1){
  alert("ERROR: You cannot get access to the portal.")
}
else{
  document.getElementById("res").innerHTML = 'The link to the portal :<a href="prac31.html">Press here.</a>';
}
