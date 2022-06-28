function inicializarComponentes () {
    document.getElementById('responder').addEventListener('click', questoes);
}

function questoes () {
    var resposta1 = document.getElementsByName('esporte');
    var resposta2 = document.getElementsByName('esporte2');
    var resposta3 = document.getElementsByName('esporte3');
    var resposta4 = document.getElementsByName('esporte4');
    var resposta5 = document.getElementsByName('esporte5');
    var resposta6 = document.getElementsByName('esporte6');
    var n = 0;

    if (resposta1[0].checked){
            var q1 = '1) Você acertou!'
            n = n + 1
    }
    else {
        var q1 = '1) Você errou!'
    }

    if (resposta2[1].checked){
        var q2 = '2) Você acertou!'
        n = n + 1
    } 
    else {
    var q2 = '2) Você errou!'
    }
    if (resposta3[2].checked){
        var q3 = '3) Você acertou!'
        n = n + 1
    }
    else {
    var q3 = '3) Você errou!'
    }

    if (resposta4[0].checked){
        var q4 = '4) Você acertou!'
        n = n + 1
    }
    else {
        var q4 = '4) Você errou!'
    }

    if (resposta5[1].checked){
        var q5 = '5) Você acertou!'
        n = n + 1
    } 
    else {
    var q5 = '5) Você errou!'
    }
    if (resposta6[2].checked){
        var q6 = '6) Você acertou!'
        n = n + 1
    }
    else {
    var q6 = '6) Você errou!'
    }

    alert(q1 + '\n' + q2 + '\n' + q3 + '\n' + q4 + '\n' + q5 + '\n' + q6 + '\n' + n + ' acertos de 6 questões.')
}