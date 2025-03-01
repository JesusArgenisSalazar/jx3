let boton = document.querySelector(".header__boton");
let menu = document.querySelector(".header__ul-phone");


let desplega_barra = false;
boton.addEventListener("click",function(){

   if(!desplega_barra){
    
       menu.style.top = "50px";
       desplega_barra = true;

   }else{

       menu.style.top = "-100vh";
       desplega_barra = false;
   }
   
      

});