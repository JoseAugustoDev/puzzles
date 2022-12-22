const jogo = () => {

    function getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min)
    }

    let computerOptions = document.querySelectorAll(".opcao-single")

    let escolhaUser = prompt("Escolha: Pedra, Papel ou Tesoura!")
    let computadorEscolha = getRandomArbitrary(0, 3)

    if (escolhaUser == "papel") {
        let escolhaFinal = computerOptions[computadorEscolha].innerHTML;
        if(escolhaFinal.toLocaleLowerCase() == "papel") {

            alert("Empate! O computador também escolheu Papel!")

        } else if (escolhaFinal.toLocaleLowerCase() == "pedra") {

            alert("Parabéns! Você ganhou!!! O computador escolheu Pedra!")

        } else if (escolhaFinal.toLocaleLowerCase() == "tesoura") {

            alert("Você Perdeu! O computador escolheu Tesoura!")
            
        }

    } else if (escolhaUser == "pedra") {
        let escolhaFinal = computerOptions[computadorEscolha].innerHTML;
        if(escolhaFinal.toLocaleLowerCase() == "papel") {

            alert("Você perdeu! O computador escolheu Papel!")


        } else if (escolhaFinal.toLocaleLowerCase() == "pedra") {

            alert("Empate! O computador também escolheu Pedra!")

        } else if (escolhaFinal.toLocaleLowerCase() == "tesoura") {

            alert("Você Ganhou! O computador escolheu Tesoura!")

        }

    } else if (escolhaUser == "tesoura") {
        let escolhaFinal = computerOptions[computadorEscolha].innerHTML;
        if(escolhaFinal.toLocaleLowerCase() == "papel") {

            alert("Você Ganhou! O computador escolheu Papel!")

        } else if (escolhaFinal.toLocaleLowerCase() == "pedra") {

            alert("Você Perdeu! O computador escolheu Pedra!")

        } else if (escolhaFinal.toLocaleLowerCase() == "tesoura") {

            alert("Empate! O computador também escolheu Tesoura!")

        }
    } else {
        alert("Escolha inválida!")
    }
}
