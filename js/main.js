const inicio = document.querySelector('.inicio');
const calculadora = document.querySelector('.calculadora');
const resultado = document.querySelector('.resultado');

function trocaDiv (divAtual, proximaDiv) {
    let displayNone
    let displayFlex

    if (divAtual == 1) {
        displayNone = inicio;
    } else if (divAtual == 2) {
        displayNone = calculadora;
    } else {
        displayNone = resultado;
    }
    displayNone.style.display = 'none';

    if (proximaDiv == 1) {
        displayFlex = inicio;
    } else if (proximaDiv == 2) {
        displayFlex = calculadora;
    } else {
        displayFlex = resultado;
    }
    displayFlex.style.display = 'flex';
}

function validar() {
    const primeiroNumero =  document.getElementById('primeiro-numero');
    const segundoNumero = document.getElementById('segundo-numero');
    const valorResultado = document.getElementById('resultado');

    if(!primeiroNumero.value || !segundoNumero.value) {
        if (!primeiroNumero.value && !segundoNumero.value) {
            primeiroNumero.style.border = 'solid 1px red';
            segundoNumero.style.border = 'solid 1px red';
        } else if (!primeiroNumero.value) {
            primeiroNumero.style.border = 'solid 1px red';
            segundoNumero.style.border = 'none';
        } else if (!segundoNumero.value) {
            segundoNumero.style.border = 'solid 1px red';
            primeiroNumero.style.border = 'none';
        }
    } else {
        const select = document.getElementById('operacoes');
	    const value = select.options[select.selectedIndex].value;
        if (value == 'mais') {
            valorResultado.innerHTML = parseInt(primeiroNumero.value) + ' + ' + parseInt(segundoNumero.value) + ' = ' +  (parseInt(primeiroNumero.value) + parseInt(segundoNumero.value));
        } else if (value == 'menos') {
            valorResultado.innerHTML = parseInt(primeiroNumero.value) + ' - ' + parseInt(segundoNumero.value) + ' = ' +  (parseInt(primeiroNumero.value) - parseInt(segundoNumero.value));
        } else if (value == 'vezes') {
            valorResultado.innerHTML = parseInt(primeiroNumero.value) + ' X ' + parseInt(segundoNumero.value) + ' = ' +  (parseInt(primeiroNumero.value) * parseInt(segundoNumero.value));
        } else if (value == 'dividir') {
            valorResultado.innerHTML = parseInt(primeiroNumero.value) + ' ÷ ' + parseInt(segundoNumero.value) + ' = ' +  (parseInt(primeiroNumero.value) / parseInt(segundoNumero.value));
        }
        trocaDiv(2, 3);
    }
}
