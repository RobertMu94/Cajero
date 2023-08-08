    var cuentas = [
        { nombre: "Robert", saldo: 200, contraseña: "123456" },
        { nombre: "Martin", saldo: 290, contraseña: "654321" },
        { nombre: "Juan", saldo: 67, contraseña: "987654" },
    ];

function Ingresoformulario() {

    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("clave").value;

    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === user && cuentas[i].contraseña === pass) {
            window.location.href ="index2.html";
            return;
        }
    }
  alert("usuario o contraseña incorrecta. Intentalo de nuevo");
}
 