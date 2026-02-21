var navbar = document.getElementById('navbar')
var menu = document.getElementById('menu')
var btn = document.getElementById('btn')
var hidden = document.getElementById('hidden')

var menuStatus = false
menu.addEventListener('click',()=>{
  if(menuStatus){
    navbar.style.height = '18rem'
    navbar.style.borderRadius = '40px'
    navbar.style.alignItems = 'start'
    menuStatus = false
    hidden.style.display = 'block'
  }
  else{
    navbar.style.height = '4.5rem'
    navbar.style.alignItems = 'center'
    hidden.style.display = 'none'
    menuStatus =true
  }
  
})
