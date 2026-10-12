// Demostración de JavaScript
function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.textContent = getLanguage() === "en"
            ? "JavaScript is working correctly! 🚀"
            : "¡JavaScript está funcionando correctamente! 🚀";
    }
}

function getLanguage() {
    return localStorage.getItem("idiomaGuia") || "es";
}

const traducciones = {
    "Guía de Desarrollo Web": "Web Development Guide",
    "JavaScript | Guía de Desarrollo Web": "JavaScript | Web Development Guide",
    "jQuery | Guía de Desarrollo Web": "jQuery | Web Development Guide",
    "JSON | Guía de Desarrollo Web": "JSON | Web Development Guide",
    "Hosting y dominios | Guía de Desarrollo Web": "Hosting and Domains | Web Development Guide",
    "Cuestionario Web | Guía de Desarrollo Web": "Web Quiz | Web Development Guide",
    "Inicio": "Home",
    "Objetivos": "Objectives",
    "Cuestionario": "Quiz",
    "Recursos": "Resources",
    "Entrega": "Submission",
    "Modo oscuro": "Dark mode",
    "Modo claro": "Light mode",
    "Bienvenido a nuestra guía": "Welcome to our guide",
    "Esta página fue creada como una guía de estudio para aprender los conceptos básicos del desarrollo web.": "This page was created as a study guide to learn the basics of web development.",
    "Aquí encontrarás información, ejemplos de código, comparaciones y recursos relacionados con HTML, CSS, JavaScript, jQuery y JSON.": "Here you will find information, code examples, comparisons, and resources related to HTML, CSS, JavaScript, jQuery, and JSON.",
    "Comenzar": "Get started",
    "HTML": "HTML",
    "CSS": "CSS",
    "Conocer cómo se estructura una página web utilizando HTML5.": "Learn how a web page is structured using HTML5.",
    "Aprender a utilizar estilos para mejorar la apariencia de una página.": "Learn to use styles to improve the appearance of a page.",
    "Crear funcionalidades e interactividad dentro de una página web.": "Create features and interactivity on a web page.",
    "Conocer una biblioteca que facilita determinadas tareas de JavaScript.": "Learn about a library that simplifies certain JavaScript tasks.",
    "¿Qué es HTML?": "What is HTML?",
    "HTML significa HyperText Markup Language. Es el lenguaje utilizado para crear la estructura de las páginas web.": "HTML stands for HyperText Markup Language. It is the language used to create the structure of web pages.",
    "HTML permite agregar títulos, párrafos, imágenes, enlaces, tablas, formularios y otros elementos.": "HTML lets you add headings, paragraphs, images, links, tables, forms, and other elements.",
    "Ejemplo de HTML": "HTML example",
    "¿Qué es CSS?": "What is CSS?",
    "CSS significa Cascading Style Sheets. Se utiliza para darle diseño y estilo a las páginas web.": "CSS stands for Cascading Style Sheets. It is used to design and style web pages.",
    "Con CSS podemos modificar colores, tamaños, fuentes, espacios, fondos, bordes y mucho más.": "With CSS, we can change colors, sizes, fonts, spacing, backgrounds, borders, and much more.",
    "Ejemplo de CSS": "CSS example",
    "¿Qué es JavaScript?": "What is JavaScript?",
    "JavaScript es un lenguaje de programación utilizado para agregar interactividad y funcionalidades a las páginas web.": "JavaScript is a programming language used to add interactivity and features to web pages.",
    "Ejemplo": "Example",
    "Demostración de JavaScript": "JavaScript demonstration",
    "Presiona el botón": "Press the button",
    "Cambiar mensaje": "Change message",
    "¡JavaScript está funcionando correctamente! 🚀": "JavaScript is working correctly! 🚀",
    "¿Qué es jQuery?": "What is jQuery?",
    "jQuery es una biblioteca de JavaScript que permite realizar determinadas tareas de una manera más sencilla.": "jQuery is a JavaScript library that makes certain tasks easier to perform.",
    "Ejemplo con jQuery": "jQuery example",
    "Demostración de jQuery": "jQuery demonstration",
    "Probar jQuery": "Try jQuery",
    "¡jQuery está funcionando correctamente! 🎉": "jQuery is working correctly! 🎉",
    "¿Qué es JSON?": "What is JSON?",
    "JSON significa JavaScript Object Notation. Es un formato utilizado para almacenar y transportar información.": "JSON stands for JavaScript Object Notation. It is a format used to store and transfer information.",
    "Ejemplo de JSON": "JSON example",
    "Cómo se usa JSON con APIs": "How to use JSON with APIs",
    "Las aplicaciones pueden solicitar datos a un servidor mediante una API. A menudo, el servidor responde con JSON, que JavaScript puede convertir en objetos para mostrar la información.": "Applications can request data from a server through an API. The server often responds with JSON, which JavaScript can convert into objects to display the information.",
    "JavaScript vs. jQuery": "JavaScript vs. jQuery",
    "Función": "Function",
    "Seleccionar elemento": "Select an element",
    "Cambiar texto": "Change text",
    "Ocultar elemento": "Hide an element",
    "Mostrar elemento": "Show an element",
    "Evento clic": "Click event",
    "Ejemplos de Código": "Code Examples",
    "Variable": "Variable",
    "Condicional": "Conditional",
    "Función": "Function",
    "Arreglo": "Array",
    "Prueba Interactiva": "Interactive Test",
    "Nombre:": "Name:",
    "Escribe tu nombre": "Enter your name",
    "Correo:": "Email:",
    "Mensaje:": "Message:",
    "Escribe un mensaje": "Enter a message",
    "Enviar": "Submit",
    "¡Formulario enviado correctamente, ": "Form submitted successfully, ",
    "Recursos y Bibliografía": "Resources and References",
    " Recursos y Bibliografía": " Resources and References",
    "Documentación y recursos para aprender tecnologías web.": "Documentation and resources for learning web technologies.",
    "Visitar MDN": "Visit MDN",
    "Sitio educativo con tutoriales y ejemplos de programación web.": "Educational site with tutorials and web programming examples.",
    "Visitar W3Schools": "Visit W3Schools",
    "Documentación oficial de la biblioteca jQuery.": "Official documentation for the jQuery library.",
    "Visitar jQuery": "Visit jQuery",
    "Control de Versiones": "Version Control",
    "GitHub será utilizado para almacenar el código del proyecto y controlar las diferentes versiones.": "GitHub will be used to store the project code and manage its different versions.",
    "Se realizarán commits periódicos para demostrar el avance incremental del proyecto.": "Commits will be made regularly to demonstrate the project's incremental progress.",
    "Inicio del proyecto": "Project kickoff",
    "Creación de la página principal": "Creating the home page",
    "Agregando CSS": "Adding CSS",
    "Agregando JavaScript": "Adding JavaScript",
    "Agregando jQuery": "Adding jQuery",
    "Agregando JSON": "Adding JSON",
    "Corrección de errores": "Bug fixes",
    "Versión final": "Final version",
    "Entrega del Proyecto": "Project Submission",
    "Repositorio público del proyecto.": "Public project repository.",
    "Aplicación publicada en Internet.": "Application published on the internet.",
    "Formato final de entrega": "Final submission format",
    "Para la entrega se deben proporcionar únicamente dos enlaces:": "Only two links must be provided for submission:",
    "1. Repositorio público de GitHub": "1. Public GitHub repository",
    "2. Aplicación desplegada en Vercel": "2. Application deployed on Vercel",
    "Ejemplo:": "Example:",
    "Proyecto académico de desarrollo web.": "Academic web development project.",
    "© 2026 - Todos los derechos reservados": "© 2026 - All rights reserved",
    "Recursos y bibliografía": "Resources and References",
    "Web Hosting y Dominios": "Web Hosting and Domains",
    "¿Qué es Web Hosting?": "What is web hosting?",
    "Es un servicio que guarda los archivos de un sitio web y los entrega a los visitantes a través de internet.": "It is a service that stores a website's files and delivers them to visitors over the internet.",
    "Compartido:": "Shared:",
    "varios sitios usan los recursos de un servidor.": "multiple websites use the resources of one server.",
    "VPS:": "VPS:",
    "un servidor virtual con recursos asignados.": "a virtual server with allocated resources.",
    "Nube:": "Cloud:",
    "utiliza infraestructura de varios servidores.": "uses infrastructure from multiple servers.",
    "Vercel:": "Vercel:",
    "plataforma que facilita publicar proyectos web, especialmente sitios estáticos y aplicaciones frontend, conectando repositorios como GitHub.": "a platform that makes it easy to publish web projects, especially static sites and frontend applications, by connecting repositories such as GitHub.",
    "¿Qué es un dominio?": "What is a domain?",
    "Es el nombre legible que se utiliza para encontrar un sitio web, por ejemplo, ejemplo.com.": "It is the readable name used to find a website, for example, example.com.",
    "TLD:": "TLD:",
    "terminación del dominio, como .com, .net u .org.": "the domain ending, such as .com, .net, or .org.",
    "Subdominio:": "Subdomain:",
    "una parte añadida delante del dominio, como blog.ejemplo.com.": "a part added before the domain, such as blog.example.com.",
    "¿Cómo funciona la propagación DNS?": "How does DNS propagation work?",
    "Escribes el dominio": "You enter the domain",
    "El navegador consulta el DNS": "The browser queries DNS",
    "El DNS encuentra la dirección IP": "DNS finds the IP address",
    "El navegador se conecta al servidor": "The browser connects to the server",
    "Se muestra la página web": "The web page is displayed",
    "Los cambios DNS pueden tardar en actualizarse en diferentes redes y proveedores.": "DNS changes may take time to update across different networks and providers.",
    "Documentación de Vercel": "Vercel documentation",
    "Cloudflare: ¿Qué es DNS?": "Cloudflare: What is DNS?",
    "Cuestionario Web": "Web Quiz",
    "Responde las diez preguntas y presiona “Calificar” para ver tu puntuación y retroalimentación.": "Answer all ten questions and press “Grade” to see your score and feedback.",
    "1. ¿Qué lenguaje define la estructura de una página web?": "1. Which language defines the structure of a web page?",
    "2. ¿Para qué se utiliza principalmente CSS?": "2. What is CSS primarily used for?",
    "Para dar estilo a la página": "To style the page",
    "Para almacenar datos": "To store data",
    "Para registrar dominios": "To register domains",
    "3. ¿Qué permite hacer JavaScript en una página?": "3. What does JavaScript let you do on a page?",
    "Solo crear títulos": "Only create headings",
    "Agregar comportamiento e interactividad": "Add behavior and interactivity",
    "Alojar archivos": "Host files",
    "4. ¿Cuál palabra se usa para declarar una variable que puede cambiar?": "4. Which keyword is used to declare a variable that can change?",
    "5. ¿Qué es jQuery?": "5. What is jQuery?",
    "Un servidor": "A server",
    "Una biblioteca de JavaScript": "A JavaScript library",
    "Un formato de imagen": "An image format",
    "6. ¿Qué símbolo se utiliza habitualmente en los selectores de jQuery?": "6. Which symbol is commonly used in jQuery selectors?",
    "7. ¿Qué significa JSON?": "7. What does JSON stand for?",
    "JavaScript Object Notation": "JavaScript Object Notation",
    "Java Source Online Network": "Java Source Online Network",
    "Joined Style Object Names": "Joined Style Object Names",
    "8. ¿Cómo se representa normalmente un dato en JSON?": "8. How is data usually represented in JSON?",
    "Con pares clave-valor": "With key-value pairs",
    "Con etiquetas HTML únicamente": "Only with HTML tags",
    "Con reglas CSS": "With CSS rules",
    "9. ¿Qué hace un servicio de hosting?": "9. What does a hosting service do?",
    "Registra contraseñas": "Stores passwords",
    "Guarda y sirve archivos de un sitio web": "Stores and serves a website's files",
    "Crea automáticamente todos los textos": "Automatically creates all text",
    "10. ¿Qué función cumple DNS?": "10. What does DNS do?",
    "Cambia el color del sitio": "Changes the site's color",
    "Relaciona nombres de dominio con direcciones IP": "Maps domain names to IP addresses",
    "Edita el código CSS": "Edits CSS code",
    "Calificar respuestas": "Grade answers",
    "Correcto ✓": "Correct ✓",
    "Incorrecto. Revisa la respuesta correcta y vuelve a estudiar.": "Incorrect. Review the correct answer and study again.",
    "Tu puntuación: ": "Your score: ",
    " de ": " out of "
};

const titulosTraducidos = {
    "Guía de Desarrollo Web": "Web Development Guide",
    "JavaScript | Guía de Desarrollo Web": "JavaScript | Web Development Guide",
    "jQuery | Guía de Desarrollo Web": "jQuery | Web Development Guide",
    "JSON | Guía de Desarrollo Web": "JSON | Web Development Guide",
    "Hosting y dominios | Guía de Desarrollo Web": "Hosting and Domains | Web Development Guide",
    "Cuestionario Web | Guía de Desarrollo Web": "Web Quiz | Web Development Guide"
};

const traduccionesInversas = Object.fromEntries(
    Object.entries(traducciones).map(([espanol, ingles]) => [ingles, espanol])
);

document.addEventListener("DOMContentLoaded", function () {
    let idioma = getLanguage();
    const botonIdioma = document.getElementById("botonIdioma");
    const botonTema = document.getElementById("botonTema");

    function traducirTexto(texto, idiomaDestino) {
        const espaciosIniciales = texto.match(/^\s*/)[0];
        const espaciosFinales = texto.match(/\s*$/)[0];
        const contenido = texto.trim().replace(/\s+/g, " ");
        const traduccion = idiomaDestino === "en"
            ? traducciones[contenido]
            : traduccionesInversas[contenido];

        return traduccion
            ? espaciosIniciales + traduccion + espaciosFinales
            : texto;
    }

    function actualizarTema() {
        if (!botonTema) return;
        const oscuro = document.body.classList.contains("modo-oscuro");
        const texto = oscuro
            ? (idioma === "en" ? "☀️ Light mode" : "☀️ Modo claro")
            : (idioma === "en" ? "🌙 Dark mode" : "🌙 Modo oscuro");
        botonTema.textContent = texto;
        botonTema.setAttribute("aria-pressed", oscuro ? "true" : "false");
    }

    function actualizarResultadosQuiz() {
        const quiz = document.getElementById("quizForm");
        if (!quiz) return;

        quiz.querySelectorAll(".resultado").forEach((resultado) => {
            if (!resultado.dataset.estado) return;
            const correcto = resultado.dataset.estado === "correcto";
            resultado.textContent = idioma === "en"
                ? (correcto ? "Correct ✓" : "Incorrect. Review the correct answer and study again.")
                : (correcto ? "Correcto ✓" : "Incorrecto. Revisa la respuesta correcta y vuelve a estudiar.");
        });

        const resultadoFinal = document.getElementById("resultadoFinal");
        if (resultadoFinal && resultadoFinal.dataset.puntos !== undefined) {
            const puntos = Number(resultadoFinal.dataset.puntos);
            const total = Number(resultadoFinal.dataset.total);
            const porcentaje = Math.round((puntos / total) * 100);
            resultadoFinal.textContent = idioma === "en"
                ? `Your score: ${puntos} out of ${total} (${porcentaje}%).`
                : `Tu puntuación: ${puntos} de ${total} (${porcentaje}%).`;
        }
    }

    function cambiarIdioma(nuevoIdioma) {
        idioma = nuevoIdioma;
        localStorage.setItem("idiomaGuia", idioma);

        const lector = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let nodo;
        while ((nodo = lector.nextNode())) {
            if (nodo.parentElement.closest("script, style, pre, code")) continue;
            nodo.nodeValue = traducirTexto(nodo.nodeValue, idioma);
        }

        document.querySelectorAll("[placeholder]").forEach((elemento) => {
            elemento.placeholder = traducirTexto(elemento.placeholder, idioma).trim();
        });

        document.documentElement.lang = idioma;
        document.title = idioma === "en"
            ? titulosTraducidos[document.title] || document.title
            : traduccionesInversas[document.title] || document.title;
        if (botonIdioma) {
            botonIdioma.textContent = idioma === "en" ? "Español" : "English";
        }
        actualizarTema();
        actualizarResultadosQuiz();
    }

    const temaGuardado = localStorage.getItem("temaGuia");
    if (temaGuardado === "oscuro") {
        document.body.classList.add("modo-oscuro");
    }

    if (botonTema) {
        botonTema.addEventListener("click", function () {
            document.body.classList.toggle("modo-oscuro");
            const tema = document.body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
            localStorage.setItem("temaGuia", tema);
            actualizarTema();
        });
    }

    if (botonIdioma) {
        botonIdioma.addEventListener("click", function () {
            cambiarIdioma(idioma === "es" ? "en" : "es");
        });
    }

    cambiarIdioma(idioma);

    // Demo de jQuery, si esos elementos están en la página.
    if (window.jQuery && document.getElementById("botonJquery")) {
        $("#botonJquery").on("click", function () {
            $("#mensaje").text(idioma === "en"
                ? "jQuery is working correctly! 🎉"
                : "¡jQuery está funcionando correctamente! 🎉");
        });
    }

    // Formulario de ejemplo.
    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            alert(idioma === "en"
                ? "Form submitted successfully, " + nombre + "!"
                : "¡Formulario enviado correctamente, " + nombre + "!");
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
                const correcto = marcada && marcada.value === pregunta.dataset.respuesta;
                if (correcto) puntos++;
                resultado.dataset.estado = correcto ? "correcto" : "incorrecto";
                resultado.className = correcto ? "resultado correcto" : "resultado incorrecto";
            });
            const total = preguntas.length;
            const resultadoFinal = document.getElementById("resultadoFinal");
            resultadoFinal.dataset.puntos = puntos;
            resultadoFinal.dataset.total = total;
            actualizarResultadosQuiz();
        });
    }
});
