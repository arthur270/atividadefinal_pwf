function inicializarComponentes () {
    document.getElementById('resposta').addEventListener('click', gols1)
}

function gols1 () {
    //var gols = document.getElementById('gols').value;
    //var i = 0;
    /*while (i = 0) {
        if (gols = 116) {
            alert('Parabéns, você acertou!');
            i = 1;
        }

        else {
            var gols = prompt("Você errou. Tente novamente!")
        }
    }*/

    do {
        var gols = prompt('Digite sua resposta: ');
    } while (gols != 116) 

    alert('Parabéns! Você acertou.')
}