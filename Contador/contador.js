const projeto1 = () => {
    let contador = document.querySelector("#value");
    let showValue = document.querySelector(".showValue")
    let valueContador = parseInt(contador.value) + 1;
    
    setInterval(function(){
        valueContador--;
        
        if (valueContador <= 0) {
            valueContador = 0;
        }
        
        showValue.innerHTML = valueContador;
    
    },1000)
}

