let data = [null,2," ",true,98,false,24,12]
dt = ""
for(let i of data){
  dt += i
  dt+= " "
}
document.getElementById("data").innerHTML = "["+dt+"]";

let n = data.length;
let cnt = 0;
let i = 0;
let ans = ""
while(cnt!=n){
  if(!Number.isInteger(data[i])){
    data.splice(i,1);
  }
  else{
    i+=1;
  }
  cnt+=1;
}
for(i of data){
  ans += i
  ans+= " "
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let shf = "";
for(i of data){
  shf += i
  shf+= " "
}

document.getElementById("ans").innerHTML = "["+ans+"]";
document.getElementById("shuf").innerHTML = "["+shf+"]";
