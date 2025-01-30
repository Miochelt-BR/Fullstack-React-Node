let display = document.getElementById('display');

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = '';
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        let expressao = display.value.replace(/%/g, '/100'); 
        display.value = eval(expressao);
    } catch {
        display.value = 'Erro';
    }
}


document.addEventListener('keydown', function(event) {
    const teclasValidas = '0123456789+-*/.=C%EnterBackspace';
    let tecla = event.key;

    if (!teclasValidas.includes(tecla)) return;

    if (tecla === 'Enter') {
        calcular();
    } else if (tecla === 'Backspace') {
        apagar();
    } else if (tecla === 'C' || tecla === 'c') {
        limpar();
    } else {
        adicionar(tecla);
    }
});
