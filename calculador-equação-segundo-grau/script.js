'use strict';

let buttun = document.getElementById('calcular');
let buttun_limpar = document.getElementById('limpar');

buttun.addEventListener('click',calculo);
buttun_limpar.addEventListener('click',limpar);

function calculo(e){
    e.preventDefault(); //para impedir que a pagina sofra um reload//
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let delta = Math.pow(num2,2) - 4*num1*num3;
    alert("Delta = " + delta);
     
    if( delta > 0){
        let raiz1 = ( ( -num2 + Math.sqrt(delta)) / (2*num1) );
        let raiz2 = ( ( -num2 - Math.sqrt(delta)) / (2*num1) );
        document.getElementById('resultado').innerHTML = 
        'Raiz 1 = ' + raiz1 + 'Raiz 2 = ' + raiz2; 
    }else if ( delta === 0 ){
        let raizUnica = ( ( -num2 + Math.sqrt(delta)) / (2*num1) );
        document.getElementById('resultado').innerHTML = 
        'Raiz unica = ' + raizUnica; 
    }else if ( delta < 0 ){
        document.getElementById('resultado').innerHTML=
        'Delta < 0, não existe raizes no conjunto dos numeros reais.';
    }

}


function limpar(e){
    document.getElementById('num1').value = '  ';
    document.getElementById('num2').value = '  ';
    document.getElementById('num3').value = '  ';
    document.getElementById('resultado').innerHTML = null;
}
