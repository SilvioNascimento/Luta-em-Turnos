let turnos = 0;

let vidaJogador = 100;
let vidaAdversaria = 100;
let listaVidas = [vidaJogador, vidaAdversaria];


let atk1 = 15;
let atk2 = 30;
let atk3 = 60;

let listaAtks = [atk1, atk2, atk3];


function numAleatorioDeZeroADois() {
    const valorAleatorio = Math.floor(Math.random() * 3);   // Sorteia um valor de 0 a 2
    return valorAleatorio
}


function passarRodada() {
    turnos++;
}


while(turnos <= 5) {
    let jogadorAtacante = (turnos % 2 === 0) ? "Jogador1" : "Jogador2";
    let jogadorAtacado = (turnos % 2 === 0) ? "Jogador2" : "Jogador1";

    console.log(`O ${jogadorAtacante} realizará um ataque no ${jogadorAtacado}`);
    let tipoAtk = listaAtks[numAleatorioDeZeroADois()];
    
    // Se o jogador atacado for o Jogador1, então ele sofrerá dano de Jogador2
    if (jogadorAtacado === "Jogador1") {
        vidaJogador -= tipoAtk;
        console.log(`O ${jogadorAtacante} causou ${tipoAtk} em ${jogadorAtacado}`)

        if(vidaJogador <= 0) {
            console.log(`O ${jogadorAtacado} está derrotado!\nO vencedor é ${jogadorAtacante}`)
            break;
        } else {
            console.log(`O ${jogadorAtacado} possui ${vidaJogador} de vida. Ele ainda resiste, por enquanto...`)
        }

    // Se o jogador atacado for o Jogador2, então ele sofrerá dano de Jogador1
    } else {
        vidaAdversaria -= tipoAtk
        console.log(`O ${jogadorAtacante} causou ${tipoAtk} em ${jogadorAtacado}`)

        if(vidaAdversaria <= 0) {
            console.log(`O ${jogadorAtacado} está derrotado!\nO vencedor é ${jogadorAtacante}`)
            break;
        } else {
            console.log(`O ${jogadorAtacado} possui ${vidaAdversaria} de vida. Ele ainda resiste, por enquanto...`)
        }

    }
    passarRodada();
    if (turnos === 6) {
        console.log("Houve um empate!")
    }

}
