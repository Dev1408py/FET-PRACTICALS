function check4_1() {
  num = document.getElementById("num").value;
   document.getElementById("ans").innerHTML = 2 * Math.abs(num - 13);
}

function check4_2() {
  let n = (Math.floor(Math.random() * 5)) + 1;
  while (true) {
    let inpt = prompt("Enter a number of your choice: ");
    if (inpt == n) {
      alert("Good Job!!");
      break;
    }
    else {
      alert("Not Matched.");
    }
  }
}
