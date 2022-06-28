function inicializarComponentes () {
    document.getElementById('registrar').addEventListener('click', registro);
}

function registro () {
    const nome = (document.getElementById('nome')).value;
    alert('Olá ' + nome + ', você foi registrado com sucesso!')
}