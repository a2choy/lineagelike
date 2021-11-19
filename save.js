function load_game(save_data) {
  if (typeof save_data.stone !== "undefined") stone = save_data.stone
  if (typeof save_data.wood !== "undefined") wood = save_data.wood
  if (typeof save_data.wood !== "undefined") hero_list = save_data.hero_list
}

window.onload = function () {
  var save_data = JSON.parse(localStorage.getItem("save_data"))
  load_game(save_data)
  //functions to update the values of the other js files
}

function save_game() {
  var save_data = {
    stone: stone,
    wood: wood,
    hero_list: hero_list
  }
  localStorage.setItem("save_data", JSON.stringify(save_data))
}

function export_game(){
  var save_data = {
    stone: stone,
    wood: wood,
    hero_list: hero_list
  }
  var encoded = btoa(JSON.stringify(save_data))
  var decoded = atob("eyJzdG9uZSI6MjQ0LCJ3b29kIjoxNDR9")
  document.querySelector('.bg-modal').style.display = "flex"
  document.querySelector('.export-popup').style.display = "flex"
  document.querySelector('.import-popup').style.display = "none"
  document.getElementById("export_save_data").value = encoded
}

function copy_save(){
  var copy_text = document.getElementById("export_save_data")
  copy_text.select();
  copy_text.setSelectionRange(0, 99999)
  document.execCommand("copy")
  alert("Copied the text: " + copy_text.value)
}

function exit_popup(){
  document.querySelector('.bg-modal').style.display = "none"
  document.querySelector('.import-popup').style.display = "none"
  document.querySelector('.export-popup').style.display = "none"
}

function import_game(){
  document.querySelector('.bg-modal').style.display = "flex"
  document.querySelector('.export-popup').style.display = "none"
  document.querySelector('.import-popup').style.display = "flex"
}

function import_save(){
  var save_data = document.getElementById("import_save_data").value
  try {
    var decoded = atob(save_data)
  } catch(e){
    alert("Bad save data")
    return
  }
  alert("Successfully loaded save")
  load_game(decoded)
}

setInterval(function () {
  save_game()
  console.log("Game saved")
}, 60 * 1000)
