import { authPassword, calculatePower, factorial, fibonacci, game, guessNumber, multiplicationTable, primeNumber, showEvenOdd, temperatureConvert } from "./funciones/index.js";

export const menuFunctions={
    1:showEvenOdd,
    2:factorial,
    3:authPassword,
    4:multiplicationTable,
    5:guessNumber,
    6:primeNumber,
    7:fibonacci,
    8:temperatureConvert,
    9:calculatePower,
    10:game
}
export const menuMessage={
    1:"ingrese un numero y se mostrara la cantidad de números pares e impares,dentro del rango desde 1 hasta ese número.",
    2:"Calculadora de Factorial : calcula el factorial de un número ingresado.",
    3:"Validación de Contraseña: pida al usuario que ingrese una contraseña (secreto123).",
    4:"Generador de Tablas de Multiplicar: solicita al usuario un número y luego muestre la tabla de multiplicar correspondiente a ese número.",
    5:"Adivinar el Número: Crea un juego en el que el programa genere un número aleatorio entre 1 y 100, y el usuario debe adivinarlo.",
    6:"Suma de Números Primos: calcule la suma de los primeros N números primos, donde N es ingresado por el usuario.",
    7:"Secuencia de Fibonacci: Crea un programa que genere la secuencia de Fibonacci hasta un término dado por el usuario.",
    8:"Conversor temperatura : te permite pasar de Celsius a Fahrenheit o de Fahrenheit a Celsius.",
    9:"Calculadora de Potencia: ingrese un numero y su potencia, para obtener su resultado",
    10:"Juega a piedra,papel o tijera contra la computadora"
}
export const initialMessage="1.Contador números pares e impares\n2.Calculadora de factorial\n3.Validacion contraseña\n4.Generador tablas de multiplicar\n5.Adivinar el Numero\n6.Suma de números primos\n7.Secuencia de Fibonacci\n8.Convertidor de temperatura\n9.Calculadora de potencia\n10.Juego de piedra, papel o tijera\n11.Salir"