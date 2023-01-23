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

document.getElementById("ans").innerHTML = "["+ans+"]";
console.log(ans)
