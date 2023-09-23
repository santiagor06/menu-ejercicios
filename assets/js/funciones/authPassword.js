export const authPassword = () => {
    alert("Validación de Contraseña: pida al usuario que ingrese una contraseña (secreto123).")
    const password = prompt("Ingrese una contraseña")
    const correctPasword = "secreto123"
    if(password===correctPasword) alert("Bienvenido Usuario")
    else alert("Contraseña incorrecta")
}