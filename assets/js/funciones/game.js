import { randomGenerate } from "./guessNumber.js"


export const game = () => {
    alert("Juega a piedra,papel o tijera contra la computadora")
    const option = +prompt("Seleccione una opcion:\n1.Piedra\n2.Papel\n3.Tijera")
    const optionRival = randomGenerate(1, 3);
    const yourChoice=selectOption(option);
    const rivalChoice=selectOption(optionRival)
    const result=selectWinner(yourChoice,rivalChoice)
    alert(`Tu: ${yourChoice}\nRival: ${rivalChoice}\n${result}`)
}


const selectOption = (opcion) => {
    switch (opcion) {
        case 1:
            return "Piedra"
        case 2:
            return "Papel"
        case 3:
            return "Tijera"
        default:
            alert("Seleccione una opcion valida")
            break;
    }
}
const selectWinner=(choiceOne,choiceTwo)=>{
    if(choiceOne===choiceTwo)return "Empate"
    if(choiceOne==="Tijera"){
        if(choiceTwo==="Piedra")return "Perdiste"
        if(choiceTwo==="Papel")return  "Ganaste"
    }
    else if(choiceOne==="Piedra"){
        if(choiceTwo==="Papel")return "Perdiste"
        if(choiceTwo==="Tijera")return  "Ganaste"
    }
    else if(choiceOne==="Papel"){
        if(choiceTwo==="Tijera")return "Perdiste"
        if(choiceTwo==="Piedra")return  "Ganaste"
    }
    
}