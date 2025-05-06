setInterval(function Change() {
    change(document.getElementById('colour'));}, 10000);
function change() {
    let button =  document.getElementById('colour');
    if (button.classList.contains("btn-danger")) {
      button.classList.remove("btn-danger");
      button.classList.add("btn-warning");
      document.getElementById('colour').innerHTML = "Yellow"
    }else if (button.classList.contains("btn-warning")) {
      button.classList.remove("btn-warning");
      button.classList.add("btn-success");
      document.getElementById('colour').innerHTML = "Green"
    }else if (button.classList.contains("btn-success")) {
    button.classList.remove("btn-success");
    button.classList.add("btn-danger");
    document.getElementById('colour').innerHTML = "Red"
    }
}
