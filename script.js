setInterval(function ChangeTenSecconds() {
    change();}, 10000);

let button = document.getElementById("colour");
let colors = ["red", "yellow", "green"];
let written = ["red", "yellow", "green"];
let index = 0;
let index2 = 0;
 
function change() {
   let color = colors[index];
   let write = written[index2]; 
   button.style.backgroundColor = color;
   document.getElementById('colour').textContent = write;
   index = index >= colors.length - 1 ? 0 : index + 1;
   index2 = index2 >= written.length - 1 ? 0 : index2 + 1;
}
