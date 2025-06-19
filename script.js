setInterval(function ChangeTenSecconds() {
   change();}, 10000);

let button = document.getElementById("colour");
let colors = ["red", "yellow", "green"];
let index = 0;
 
function change() {
   let color = colors[index % 3]; 
   button.style.backgroundColor = color;
   document.getElementById('colour').textContent = color;
   ++index;
}
