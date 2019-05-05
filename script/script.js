let lateral = document.querySelector(".nav-lat");
let content = document.querySelectorAll(".content");
let div_content = document.querySelectorAll(".div-content");
let li= document.querySelectorAll("li");


function mostrarConteudo(i){
    div_content[i].classList.toggle("show-content");
    for(let j=0; j < li.length; j++) {
        if(j != i)
            div_content[j].classList.remove("show-content");
    }
}

for(let i=0; i < li.length; i++)
    li[i].addEventListener("click", function(){
        mostrarConteudo(i);
    });