document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // LOGIN
    // ==============================

    const formulario = document.getElementById("loginForm");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const usuario = document.getElementById("usuario").value.trim();
            const contrasena = document.getElementById("contrasena").value.trim();

            if (usuario === "" || contrasena === "") {

                alert("Por favor, complete todos los campos.");
                return;

            }

            alert("Inicio de sesión exitoso.");

            window.location.href = "dashboard.html";

        });

    }


    // ==============================
    // NUEVO CLIENTE
    // ==============================

    const btnNuevoCliente = document.getElementById("btnNuevoCliente");

    if (btnNuevoCliente) {

        btnNuevoCliente.addEventListener("click", function () {

            alert("Función para registrar un nuevo cliente.");

        });

    }


    // ==============================
    // EDITAR CLIENTE
    // ==============================

    const botonesEditar = document.querySelectorAll(".btn-edit");

    botonesEditar.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const fila = boton.closest("tr");

            if (fila) {

                const nombreCliente = fila.children[1].textContent;

                alert("Editando información de: " + nombreCliente);

            }

        });

    });


    // ==============================
    // ELIMINAR CLIENTE
    // ==============================

    const botonesEliminar = document.querySelectorAll(".btn-delete");

    botonesEliminar.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const fila = boton.closest("tr");

            if (fila) {

                const nombreCliente = fila.children[1].textContent;

                const confirmar = confirm(
                    "¿Desea eliminar al cliente " + nombreCliente + "?"
                );

                if (confirmar) {

                    fila.remove();

                    alert("Cliente eliminado correctamente.");

                }

            }

        });

    });

});
