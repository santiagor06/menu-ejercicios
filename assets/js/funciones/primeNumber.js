 export const primeNumber=()=>{
     const number=+prompt("Ingrese un numero")
     let total=0;
     if(number==1)return total
    for (let i = 2; i <= number; i++) {
        if(isPrime(i))total+=i;
         }
        alert(`El resultado es ${total}`) 
 }

const isPrime=(number)=>{
    for (let i = 2; i < number; i++) {
        if(number%i==0)return false
    }
    return true
}

