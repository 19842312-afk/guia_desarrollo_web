// Demostración de JavaScript
function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.textContent = "¡JavaScript está funcionando correctamente! 🚀";
    }
}

// Modo claro y oscuro: recuerda la elección mientras se navega en esta página.
document.addEventListener("DOMContentLoaded", function () {
    const botonTema = document.getElementById("botonTema");
    const temaGuardado = localStorage.getItem("temaGuia");

    if (temaGuardado === "oscuro") {
        document.body.classList.add("modo-oscuro");
    }

    function actualizarBoton() {
        if (!botonTema) return;
        const oscuro = document.body.classList.contains("modo-oscuro");
        botonTema.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
        botonTema.setAttribute("aria-pressed", oscuro ? "true" : "false");
    }

    actualizarBoton();

    if (botonTema) {
        botonTema.addEventListener("click", function () {
            document.body.classList.toggle("modo-oscuro");
            const tema = document.body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
            localStorage.setItem("temaGuia", tema);
            actualizarBoton();
        });
    }

    // Demo de jQuery, si esos elementos están en la página.
    if (window.jQuery && document.getElementById("botonJquery")) {
        $("#botonJquery").on("click", function () {
            $("#mensaje").text("¡jQuery está funcionando correctamente! 🎉");
        });
    }

    // Formulario de ejemplo.
    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            alert("¡Formulario enviado correctamente, " + nombre + "!");
        });
    }

    // Cuestionario interactivo, si existe.
    const quiz = document.getElementById("quizForm");
    if (quiz) {
        quiz.addEventListener("submit", function (event) {
            event.preventDefault();
            const preguntas = quiz.querySelectorAll(".pregunta");
            let puntos = 0;
            preguntas.forEach((pregunta) => {
                const marcada = pregunta.querySelector("input:checked");
                const resultado = pregunta.querySelector(".resultado");
                if (marcada && marcada.value === pregunta.dataset.respuesta) {
                    puntos++;
                    resultado.textContent = "Correcto ✓";
                    resultado.className = "resultado correcto";
                } else {
                    resultado.textContent = "Incorrecto. Revisa la respuesta correcta y vuelve a estudiar.";
                    resultado.className = "resultado incorrecto";
                }
            });
            const total = preguntas.length;
            document.getElementById("resultadoFinal").textContent =
                "Tu puntuación: " + puntos + " de " + total + " (" +
                Math.round((puntos / total) * 100) + "%).";
        });
    }
});
