export const fibonacci=()=>{
    alert("Secuencia de Fibonacci: Crea un programa que genere la secuencia de Fibonacci hasta un término dado por el usuario.")
    const number=+prompt("Ingrese un numero")
    if(number<2){
        alert(`El resultado es: ${number}`)
        return
    }
    let a=0;
    let b=1;
    let c=0;

   
    for (let i = 2; i <=number; i++) {
        c=a+b;
        a=b;
        b=c;
    }
    alert(`El resultado es: ${c}`)
}