const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav__menu");
const menuButton = document.querySelector(".menu__icon--hamburger");
const closeButton = document.querySelector(".menu__icon--close");



function showMenu() {
    menu.classList.add("nav__menu--active");
    menuButton.classList.add("hide");
    closeButton.classList.add("show");
   
}


function hideMenu() {
    menu.classList.remove("nav__menu--active");
    menuButton.classList.remove("hide");
    closeButton.classList.remove("show");
   
}

window.onscroll = function() {
    this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
  
}




let form5=document.querySelector('#frmvalidacion')
let fe5=document.querySelector('#campoCorreo .feedback')
let fe6=document.querySelector('#campoNombre .feedback')

let corre=/[\w]+@{1}[\w]+\.[a-z]{2,3}/


form5.correo.addEventListener('input', e =>{
e.preventDefault()


if(corre.test(e.target.value)){
form5.correo.setAttribute("class","success")
fe5.textContent=""
fe5.style.setProperty("visibility","hidden")
fe5.style.setProperty("opacity","0")


}
else{
form5.correo.setAttribute("class","error")
fe5.textContent="La estructura del correo no es valida"
fe5.style.setProperty("visibility","visible")
fe5.style.setProperty("opacity","1")
}


})


let nombre=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/  

form5.nombre.addEventListener('input', e =>{
e.preventDefault()


if(nombre.test(e.target.value)){
form5.nombre.setAttribute("class","success")
fe6.textContent=""
fe6.style.setProperty("visibility","hidden")
fe6.style.setProperty("opacity","0")


}
else{
form5.nombre.setAttribute("class","error")
fe6.textContent="La estructura del nombre no es valida"
fe6.style.setProperty("visibility","visible")
fe6.style.setProperty("opacity","1")
}


})



form5.addEventListener('submit',e=>{
  e.preventDefault()

let correo=document.getElementById('correo').value
let nombre=document.getElementById('nombre').value
let mensaje=document.getElementById('mensaje').value

if(nombre==0){
    alert("El nombre no a sido diligenciado")
    document.formulario.nombre.focus()
	
}

     else if(correo==0){
        alert("El correo electronico no a sido diligenciado")
        document.formulario.correo.focus()
}


else if(mensaje==0){
     alert("No ha escrito su mensaje")
     document.formulario.mensaje.focus()
}
     else{
     	form5.submit()
     	alert("Envio exitoso")
     }



})
