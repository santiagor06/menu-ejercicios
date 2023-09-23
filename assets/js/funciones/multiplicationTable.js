export const multiplicationTable=()=>{
    alert("Generador de Tablas de Multiplicar: solicita al usuario un número y luego muestre la tabla de multiplicar correspondiente a ese número.")
    const number=+prompt("Ingrese un numero");
    let tabla="";
    let cadena;
    for (let i = 1; i <= 10; i++) {
        cadena=`${number} * ${i} = ${number*i}\n`
        tabla+=cadena;
        
    }
    alert(tabla);
}