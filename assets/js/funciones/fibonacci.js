export const fibonacci=()=>{
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