
import { initialMessage, menuFunctions, menuMessage, } from "./menu.js";

let flag = true;
let option;
while (flag) {
    option = +prompt(initialMessage);
    if (menuMessage[option]) {
        let check = +prompt(`${menuMessage[option]}\nDesea continuar:\n1.Si\n2.No`)
        if (check === 1) menuFunctions[option]();
    }
    else if (option === 11) flag = false
    else alert("Seleccione una opcion valida")
}