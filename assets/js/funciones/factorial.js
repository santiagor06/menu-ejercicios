export const factorial=()=>{
    alert("Calculadora de Factorial : calcula el factorial de un número ingresado.")
    const number=+prompt("Ingrese un numero");
    if(number===0){
        alert("El resultado es: 0")
        return
    }
    let total=1;
    for (let i = 1; i <=number ; i++) {
        total*=i;
        
    }
    alert(`El resultado es: ${total}`)
}