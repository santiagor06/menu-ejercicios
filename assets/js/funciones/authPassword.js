export const authPassword = () => {
    const password = prompt("Ingrese una contraseña")
    const correctPasword = "secreto123"
    if(password===correctPasword) alert("Bienvenido Usuario")
    else alert("Contraseña incorrecta")
}