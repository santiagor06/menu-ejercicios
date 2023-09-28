export const factorial=()=>{
    const number=+prompt("Ingrese un numero");
    if(number===0){
        alert("El resultado es: 1")
        return
    }
    let total=1;
    for (let i = 1; i <=number ; i++) {
        total*=i;
        
    }
    alert(`El resultado es: ${total}`)
}