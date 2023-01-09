function selectedfoods(selected1,selectedtxt){

    const selectedbefore1= document.querySelector('.comidas .selecionados');
  
    if(selectedbefore1!== null){
    selectedbefore1.classList.remove('selecionados');
    }

selected1.classList.add('selecionados');
comida = selected1;
 selectioncheck();
 const elementtxt =document.querySelector( selectedtxt + ' .tittle');
 const elementprice =document.querySelector( selectedtxt + ' .price');
 infoprato= elementtxt;
 infopreco= elementprice;
 console.log(elementtxt);
}
let infoprato; 
let infopreco;
let comida;
function selecteddrinks(selected2){

    const selectedbefore2= document.querySelector('.bebidas .selecionados');

    if(selectedbefore2!== null){
    selectedbefore2.classList.remove('selecionados');
    }
   
    selected2.classList.add('selecionados');
    bebida = selected2;
    selectioncheck();
}
let bebida;
function selecteddessert(selected3){

    const selectedbefore3= document.querySelector('.sobremesas .selecionados');
    if(selectedbefore3!== null){
    selectedbefore3.classList.remove('selecionados');
    }
    selected3.classList.add('selecionados');
    sobremesa = selected3;
    selectioncheck();
}
let sobremesa;
// segunda funcionalidade verificação de pedidos selecionados e o botao de seleção muda o texto, a cor e fica ativavel 
function selectioncheck(){
    if(comida !== undefined && bebida !== undefined && sobremesa !== undefined){
        const check = document.querySelector('.botao-selecao');
        check.classList.add('activebutton');
       check.innerHTML = 'Fechar pedido';
       document.querySelector('.botao-selecao').removeAttribute('disabled');
       }
   }