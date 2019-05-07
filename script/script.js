let lateral = document.querySelector(".nav-lat");
let content = document.querySelectorAll(".content");
let div_content = document.querySelectorAll(".div-content");
let li= document.querySelectorAll("li");
let botao= document.querySelectorAll(".botao_sanduiche");
let active= document.querySelectorAll("li");

// ------------------------------------------

// function mostrarMenu() {
//     lateral.classList.toggle("show-nav");
// }
// botao.addEventListener("click", mostrarMenu);

// ------------------------------------------------

function mostrarConteudo(i){
    div_content[i].classList.add("show-content");
    for(let j=0; j < li.length; j++) {
        if(j != i)
            div_content[j].classList.remove("show-content");
    }
}

function liActive(i){
    active[i].classList.toggle("li-active");
    for(let j=0; j < li.length; j++) {
        if(j != i)
            active[j].classList.remove("li-active");
    }
}

for(let i=0; i < li.length; i++)
    li[i].addEventListener("click", function(){
        liActive(i);
    });

for(let i=0; i < li.length; i++)
    li[i].addEventListener("click", function(){
        mostrarConteudo(i);
    });