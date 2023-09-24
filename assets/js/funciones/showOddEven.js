export const showEvenOdd = () => {
    const number = +prompt("Ingrese un numero")
    let odd = 0;
    let even = 0;
    for (let i = 1; i <= number; i++) {
        isEven(i) ? even++ : odd++;

    }
    alert(`Pares:${even}\nImpares:${odd}`)
}

const isEven = (number) => number % 2 == 0;