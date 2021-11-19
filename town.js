var wood = 0
var stone = 0

function mouse_over(id){
    var build_btn = document.getElementById(id)
    //if you have the money then green, otherwise red
    //build_btn.style.backgroundColor = "#f54242";
    build_btn.innerHTML = build_btn.innerHTML + " ↑"
    build_btn.style.backgroundColor = "#61ed87"
}

function mouse_out(id){
    var build_btn = document.getElementById(id)
    build_btn.innerHTML = build_btn.innerHTML.substr(0, build_btn.innerHTML.length - 2)
    build_btn.style.backgroundColor = "white"
}

function mouse_click(id){
    //if we have money, upgrade
}

var build_btns = document.getElementsByClassName("build_btn")

for(var i = 0; i < build_btns.length ; i++){
    (function () {
        var building_ID = build_btns[i].id
        build_btns[i].addEventListener("mouseover", function() { mouse_over(building_ID); }, false)
        build_btns[i].addEventListener("mouseout", function() { mouse_out(building_ID); }, false)
        build_btns[i].addEventListener("click", function() { mouse_click(building_ID); }, false)
    }())
}

