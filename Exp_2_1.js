function multiply() {
  let a = parseInt(document.getElementById("Number").value);
  let i = 1;
  while(i<=10){
    document.getElementById("Result").innerHTML += `${a} * ${i}: ${a * i}<br>`;
    i++;
  }
}