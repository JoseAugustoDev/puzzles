const quiz = () => {

    let respostas = document.querySelectorAll(".resposta")

    for (let i = 0; i < respostas.length; i++){
        respostas[i].addEventListener('click', () => {

            let attr = respostas[i].getAttribute('resposta')
            if (attr == "true") {
                respostas[i].style.backgroundColor = "lightGreen"
                alert("Resposta Correta!")
            } else {
                respostas[i].style.backgroundColor = "red"
            }
        })
    }
}

quiz();
