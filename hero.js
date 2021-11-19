//hp bar

class HP_bar {
  constructor(element, max_hp) {
    this.value_elem = element.querySelector(".hp-bar-value")
    this.fill_elem = element.querySelector(".hp-bar-fill")

    this.max_hp = max_hp
    this.set_value(max_hp)
  }

  set_value(new_val) {
    if (new_val < 0) {
      new_val = 0
    }
    if (new_val > this.max_hp) {
      new_val = this.max_hp
    }

    this.value = new_val
    this.update()
  }

  update() {
    const curr_hp = this.value
    this.fill_elem.style.width = (curr_hp / this.max_hp) * 100 + "%"
    this.value_elem.textContent = curr_hp
  }
}

//hero class

class Hero {
  hp_bar
  constructor(hp, mp, atk, def, spd) {
    this.hp = hp
    this.curr_hp = hp
    this.mp = mp
    this.exp = 0
    this.spd_meter = 0
    this.atk = atk
    this.def = def
    this.spd = spd
    this.job = "adventurer"
    this.slot = -1
  }
}

var hero_list = []

hero_list.push(new Hero(10, 5, 10, 5, 5))
hero_list.push(new Hero(20, 5, 5, 10, 10))
hero_list.push(new Hero(5, 10, 25, 5, 5))
hero_list.push(new Hero(10, 5, 10, 5, 5))
hero_list.push(new Hero(20, 5, 5, 10, 5))
hero_list.push(new Hero(5, 10, 25, 5, 5))

var arr = [1, 2, 3]

var grid_hero = document.getElementById("grid_hero")
var selected_hero = document.getElementById("selected_hero")


var hero_slot_1 = -1
var hero_slot_2 = -1
var hero_slot_3 = -1
var hero_slot_4 = -1

//show all heroes acquired

for (var i = 0; i < hero_list.length; i++) {
  populate_grid_hero(i)
}

function populate_grid_hero(i){
  var temp_div = document.createElement("div")
  temp_div.className = "grid-hero-element"
  temp_div.id = "grid-hero-slot-" + i

  var temp_img = document.createElement("img")
  temp_img.src = "./char.png"
  temp_img.style.width = "100px"
  temp_img.style.height = "125px"

  var temp_p = document.createElement("p")
  temp_p.innerHTML =
    "HP: " +
    hero_list[i].hp +
    " MP: " +
    hero_list[i].mp +
    "<br>ATK: " +
    hero_list[i].atk +
    " DEF: " +
    hero_list[i].def

  var temp_hp = document.createElement("div")
  temp_hp.className = "hp-bar"

  var temp_hp_value = document.createElement("div")
  temp_hp_value.className = "hp-bar-value"

  var temp_hp_fill = document.createElement("div")
  temp_hp_fill.className = "hp-bar-fill"

  temp_hp.appendChild(temp_hp_value)
  temp_hp.appendChild(temp_hp_fill)
  temp_div.appendChild(temp_img)
  temp_div.appendChild(temp_p)
  temp_div.appendChild(temp_hp)

  hero_list[i].hp_bar = new HP_bar(temp_hp, hero_list[i].hp)

  grid_hero.appendChild(temp_div)
}

function populate_selected_hero(i, slot_id){
  var temp_div = document.getElementById(slot_id)

  var temp_img = document.createElement("img")
  temp_img.src = "./char.png"
  temp_img.style.width = "100px"
  temp_img.style.height = "125px"

  var temp_p = document.createElement("p")
  temp_p.innerHTML =
    "HP: " +
    hero_list[i].hp +
    " MP: " +
    hero_list[i].mp +
    "<br>ATK: " +
    hero_list[i].atk +
    " DEF: " +
    hero_list[i].def

  var temp_hp = document.createElement("div")
  temp_hp.className = "hp-bar"

  var temp_hp_value = document.createElement("div")
  temp_hp_value.className = "hp-bar-value"

  var temp_hp_fill = document.createElement("div")
  temp_hp_fill.className = "hp-bar-fill"

  temp_hp.appendChild(temp_hp_value)
  temp_hp.appendChild(temp_hp_fill)
  temp_div.appendChild(temp_img)
  temp_div.appendChild(temp_p)
  temp_div.appendChild(temp_hp)

  hero_list[i].hp_bar = new HP_bar(temp_hp, hero_list[i].hp)
}

function delete_selected_hero(slot_id){
  var temp_div = document.getElementById(slot_id)
  var child = temp_div.lastElementChild
  while (child) {
    temp_div.removeChild(child)
    child = temp_div.lastElementChild
  }
}

document.querySelectorAll(".grid-hero-element").forEach((item) => {
  item.addEventListener("click", (event) => {
    var id = parseInt(item.id.split("-")[3])
    switch (hero_list[id].slot) {
      case -1:
        if (hero_slot_1 == -1) {
          hero_slot_1 = id
          hero_list[id].slot = 0
          populate_selected_hero(id, "hero_1")
        } else if (hero_slot_2 == -1) {
          hero_slot_2 = id
          hero_list[id].slot = 1
          populate_selected_hero(id, "hero_2")
        } else if (hero_slot_3 == -1) {
          hero_slot_3 = id
          hero_list[id].slot = 2
          populate_selected_hero(id, "hero_3")
        } else if (hero_slot_4 == -1) {
          hero_slot_4 = id
          hero_list[id].slot = 3
          populate_selected_hero(id, "hero_4")
        }
        
        break
      case 0:
        hero_slot_1 = -1
        hero_list[id].slot = -1
        delete_selected_hero("hero_1")
        break
      case 1:
        hero_slot_2 = -1
        hero_list[id].slot = -1
        delete_selected_hero("hero_2")
        break
      case 2:
        hero_slot_3 = -1
        hero_list[id].slot = -1
        delete_selected_hero("hero_3")
        break
      case 3:
        hero_slot_4 = -1
        hero_list[id].slot = -1
        delete_selected_hero("hero_4")
        break
      default:
        break
    }
  })
})

//var player = hero_list[0]
//var enemy = hero_list[1]
//var spd_meter_max = 100

/*
setInterval(function(){
    if(player.spd_meter >= spd_meter_max){
        enemy.curr_hp -= 1
        enemy.hp_bar.set_value(enemy.curr_hp)
        player.spd_meter -= spd_meter_max
    }
    if(enemy.spd_meter >= spd_meter_max){
        player.curr_hp -= 1
        player.hp_bar.set_value(player.curr_hp)
        enemy.spd_meter -= spd_meter_max
    }
    player.spd_meter += player.spd
    enemy.spd_meter += enemy.spd
    console.log("Player: " + player.spd_meter)
    console.log("Enemy: " + enemy.spd_meter)
}, 250)
*/
