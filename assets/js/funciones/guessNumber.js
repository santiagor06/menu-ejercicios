export const guessNumber=()=>{
    const randomNumber=randomGenerate(1,100);
    let isPlaying=true;
    let userNumber;
    while (isPlaying) {
        userNumber=+prompt("Ingrese un numero")
        if(userNumber>randomNumber)alert("Demasiado alto")
        else if(userNumber<randomNumber)alert("Demasiado bajo")
        else {
            alert("Ganaste,Felicitaciones!!")
            isPlaying=false;
        }
    }
}

export const randomGenerate=(min, max)=>Math.floor((Math.random() * (max - min + 1)) + min);

