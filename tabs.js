//main tabs_main on left

const tabs_main = document.querySelectorAll('[data-tab-main]')
const tab_contents = document.querySelectorAll('[data-tab-main-content]')

tabs_main.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabMain)
    tab_contents.forEach(tab_content => {
      tab_content.classList.remove('active')
    })
    tabs_main.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

//tabs_town within town tab (on image)

const tabs_town = document.querySelectorAll('[data-tab-town]')
const tab_town_contents = document.querySelectorAll('[data-tab-town-content]')

tabs_town.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTown)
    tab_town_contents.forEach(tab_content => {
      tab_content.classList.remove('active')
    })
    target.classList.add('active')
  })
})

//tabs_dungeon 

const tabs_dungeon = document.querySelectorAll('[data-tab-dungeon]')
const tab_dungeon_contents = document.querySelectorAll('[data-tab-dungeon-content]')

tabs_dungeon.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabDungeon)
    tab_dungeon_contents.forEach(tab_content => {
      tab_content.classList.remove('active')
    })
    target.classList.add('active')
  })
})