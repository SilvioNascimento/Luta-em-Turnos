let jogador1 = "Jogador1";
let vidaJogador1 = 100;

let jogador2 = "Jogador2";
let vidaJogador2 = 100;

let ataques = [15, 30, 60];

function numAleatorioDeZeroADois() {
    const valorAleatorio = Math.floor(Math.random() * 3);   // Sorteia um valor de 0 a 2
    return valorAleatorio
}


function causarDano(vidaJogadorAtacado, dano) {
    return vidaJogadorAtacado - dano;
}


function verificarCondicao(vidaJogadorAtacado) {
    if(vidaJogadorAtacado <= 0) {
        return false;
    } else {
        return true;
    }
}


for(let turnos = 0; turnos <= 5; turnos++) {
    let jogadorAtacadoPodeContinuar = true;
    let jogadorAtacante = (turnos % 2 === 0) ? jogador1 : jogador2;
    let jogadorAtacado = (turnos % 2 === 0) ? jogador2 : jogador1;
    

    console.log(`O ${jogadorAtacante} vai realizar seu ataque em ${jogadorAtacado}...`);
    let dano = ataques[numAleatorioDeZeroADois()];
    console.log(`O ${jogadorAtacante} causou ${dano} de dano em ${jogadorAtacado}`);

    if(jogadorAtacado === jogador1) {
        vidaJogador1 = causarDano(vidaJogador1, dano);
        jogadorAtacadoPodeContinuar = verificarCondicao(vidaJogador1);
    } else {
        vidaJogador2 = causarDano(vidaJogador2, dano);
        jogadorAtacadoPodeContinuar = verificarCondicao(vidaJogador2);
    }

    let vidaJogadorAtacado = (turnos % 2 === 0) ? vidaJogador2 : vidaJogador1;

    if(!jogadorAtacadoPodeContinuar) {
        console.log(`O ${jogadorAtacado} não consegue mais continuar! 
    O vencedor é ${jogadorAtacante}!`)
        break;
    } else {
        console.log(`A vida do ${jogadorAtacado} está em ${vidaJogadorAtacado}...
    Ele se recusa a cair!\n`)
    }

}