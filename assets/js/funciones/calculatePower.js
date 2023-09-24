export const calculatePower=()=>{
    const number=+prompt("Ingrese el numero")
    const expo=+prompt("Ingrese el exponente")
    const total=number**expo;
    alert(`El resultado es: ${total}`)
}