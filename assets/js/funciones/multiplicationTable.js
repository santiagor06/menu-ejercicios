export const multiplicationTable=()=>{
    const number=+prompt("Ingrese un numero");
    let tabla="";
    let cadena;
    for (let i = 1; i <= 10; i++) {
        cadena=`${number} * ${i} = ${number*i}\n`
        tabla+=cadena;
        
    }
    alert(tabla);
}