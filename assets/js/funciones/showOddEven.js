export const showEvenOdd = () => {
    alert("ingrese un numero y se mostrara la cantidad de números pares e impares,dentro del rango desde 1 hasta ese número.")
    const number = +prompt("Ingrese un numero")
    let odd = 0;
    let even = 0;
    for (let i = 1; i <= number; i++) {
        isEven(i) ? even++ : odd++;

    }
    alert(`Pares:${even}\nImpares:${odd}`)
}

const isEven = (number) => number % 2 == 0;