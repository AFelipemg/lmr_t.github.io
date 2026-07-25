console.log("Biblioteca Raíces y Alas");

const elementos=document.querySelectorAll(".oculto");

const observador=new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},{
    threshold:.20
});

elementos.forEach((elemento)=>{

    observador.observe(elemento);

});

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    let desplazamiento=window.pageYOffset;

    hero.style.backgroundPositionY=desplazamiento*0.45+"px";

});