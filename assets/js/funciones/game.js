import { randomGenerate } from "./guessNumber.js"


export const game = () => {
    const opcion = +prompt("Seleccione una opcion:\n1.Piedra\n2.Papel\n3.Tijera")
    const opcionRival = randomGenerate(1, 3);
    const yourChoice=selectOption(opcion);
    const rivalChoice=selectOption(opcionRival)
    const result=selectWinner(yourChoice,rivalChoice)
    alert(`Tu: ${yourChoice}\nRival: ${rivalChoice}\n${result}`)
}


const selectOption = (opcion) => {
    const choices={
        1:"Piedra",
        2:"Papel",
        3:"Tijera"
    }
    return choices[opcion]
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