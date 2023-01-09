function selectedfoods(selected1,selectedtxt){

    const selectedbefore1= document.querySelector('.comidas .selecionados');
  
    if(selectedbefore1!== null){
    selectedbefore1.classList.remove('selecionados');
    }

selected1.classList.add('selecionados');
comida = selected1;
 selectioncheck();
 const elementtxt =document.querySelector( selectedtxt + ' .title');
 const elementprice =document.querySelector( selectedtxt + ' .price');
 infoprato= elementtxt;
 infopreco1= elementprice;
}
let infoprato; 
let infopreco1;
let comida;
function selecteddrinks(selected2,selectedtxt2){

    const selectedbefore2= document.querySelector('.bebidas .selecionados');

    if(selectedbefore2!== null){
    selectedbefore2.classList.remove('selecionados');
    }
   
    selected2.classList.add('selecionados');
    bebida = selected2;
    selectioncheck();
    const elementtxt =document.querySelector( selectedtxt2 + ' .title');
    const elementprice =document.querySelector( selectedtxt2 + ' .price');
 infobebida= elementtxt;
 infopreco2= elementprice;
}
let infobebida;
let infopreco2;
let bebida;
function selecteddessert(selected3,selectedtxt3){

    const selectedbefore3= document.querySelector('.sobremesas .selecionados');
    if(selectedbefore3!== null){
    selectedbefore3.classList.remove('selecionados');
    }
    selected3.classList.add('selecionados');
    sobremesa = selected3;
    selectioncheck();
    const elementtxt =document.querySelector( selectedtxt3 + ' .title');
    const elementprice =document.querySelector( selectedtxt3 + ' .price');
 infosobremesa= elementtxt;
 infopreco3= elementprice;
}
let infosobremesa;
let infopreco3;
let sobremesa;
function selectioncheck(){
    if(comida !== undefined && bebida !== undefined && sobremesa !== undefined){
        const check = document.querySelector('.botao-selecao');
        check.classList.add('activebutton');
       check.innerHTML = 'Fechar pedido';
       document.querySelector('.botao-selecao').removeAttribute('disabled');
       }
   }
   
   function finishwpp(){
    infopreco1= infopreco1.replace('R$', '');
    infopreco2= infopreco2.replace('R$', '');
    infopreco3= infopreco3.replace('R$', '');
    
    infopreco1= infopreco1.replace(',', '.');
    infopreco2= infopreco2.replace(',', '.');
    infopreco3= infopreco3.replace(',', '.');

    let precofinal= Number(infopreco1) + Number(infopreco2) + Number(infopreco3);
    let dm = `Ola, gostaria de fazer o pedido:
    - Prato: ${infoprato}
    - Bebida: ${infobebida}
    - SObremesa: ${infoprobremesa}
     Total: R$ ${precofinal.toFixed(2)}`;
     const wppweb = encodeURIComponent(dm);
     window.open(`https://wa.me/32988076888?text=${wppweb}`);
     console.log(wppweb);

   }