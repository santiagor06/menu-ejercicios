export const calculatePower=()=>{
    alert("Calculadora de Potencia: ingrese un numero y su potencia, para obtener su resultado")
    const number=+prompt("Ingrese el numero")
    const expo=+prompt("Ingrese el exponente")
    const total=number**expo;
    alert(`El resultado es: ${total}`)
}