let correctusu = "grupo3 ";
let correctpass = "lsarl";

let usuingres = prompt("usuario:");
let passingres = prompt("cntraseña:");

if (usuingres == correctusu && passingres === correctpass) {
  alert("inicio de sesión correcto. ¡bienvenido, " + usuingres + "!");
} else if (usuingres = "") {
  alert("Usuario o contraseña incorrectos.");
} else {
  alert ("Usuario o contraseña incorrecta.");
}