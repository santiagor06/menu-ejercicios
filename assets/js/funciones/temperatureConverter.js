export const temperatureConvert = () => {
    alert("Conversor temperatura : te permite pasar de Celsius a Fahrenheit o de Fahrenheit a Celsius.")
    let opcion = +prompt("Selecciona una opcion:\n1.Fahrenheit -> Celsius\n2.Celsius -> Fahrenheit")
    let temperature = +prompt("Ingrese la temperatura");
    let result;
    if (opcion === 1) result = fahrenheitToCelsius(temperature)
    else if (opcion === 2) result = celsiusToFahrenheit(temperature);
    else {
        alert("Opcion invalida")
        return
    }
    alert(`El resultado es: ${result}°`)
}
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const celsiusToFahrenheit = (celsius) => (celsius * (9 / 5)) + 32;