function suma (){
  const n1 = document.getElementById("num1").value;
  const n2 = document.getElementById("num2").value;
  alert(parseInt(n1)+parseInt(n2));
}
const btn = document.getElementById("btnSumar");
btn.addEventListener("click",suma);