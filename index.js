
let mines = document.getElementById('mines') ;
let plus = document.getElementById('plus') ;
let numb = document.getElementById('numb') ;
let first = document.getElementById('first') ;
let second = document.getElementById('second') ;
let price = document.getElementById('price') ;



 function claculateBill() {
     
     // console.log("hey") ;
     
     tt = (Number(first.value)+Number(first.value)*(Number(second.value)*0.01))/Number(numb.innerText) ;
     price.innerText = parseFloat(tt).toFixed(1)+" $";
    }
mines.onclick = () => {
        if (Number(numb.innerText)>1) 
             { 
               numb.innerText = Number(numb.innerText)-1 ;
               claculateBill() ;
             }
    }

plus.onclick = () => {
         
         numb.innerText = Number(numb.innerText)+1 ;
         claculateBill() ;

    }
