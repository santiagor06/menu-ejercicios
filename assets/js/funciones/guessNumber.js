export const guessNumber=()=>{
    alert("Adivinar el Número: Crea un juego en el que el programa genere un número aleatorio entre 1 y 100, y el usuario debe adivinarlo.")
    const randomNumber=randomGenerate(1,100);
    let isPlaying=true;
    let userNumber;
    while (isPlaying) {
        userNumber=+prompt("Ingrese un numero")
        if(userNumber>randomNumber)alert("Demasiado alto")
        else if(userNumber<randomNumber)alert("Demasiado bajo")
        else {
            alert("Ganaste,Felicitacione!!")
            isPlaying=false;
        }
    }
}

export const randomGenerate=(min, max)=>Math.floor((Math.random() * (max - min + 1)) + min);

