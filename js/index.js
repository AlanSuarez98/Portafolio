document.getElementById('descargarArchivo').addEventListener('click', function () {
    descargarArchivo();
});

function descargarArchivo() {
    // Contenido del archivo que deseas descargar (por ejemplo, un texto o datos binarios)
    const contenidoArchivo = 'CV Alan Suarez';

    // Nombre del archivo que se descargará
    const nombreArchivo = 'CV-Alan-Suarez.pdf';

    // Crear un enlace temporal
    const enlaceTemporal = document.createElement('a');

    // Establecer el contenido del archivo en el atributo "href" (codificado en base64)
    enlaceTemporal.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenidoArchivo);

    // Establecer el nombre del archivo que se descargará
    enlaceTemporal.download = nombreArchivo;

    // Agregar el enlace al cuerpo del documento
    document.body.appendChild(enlaceTemporal);

    // Simular un clic en el enlace para iniciar la descarga
    enlaceTemporal.click();

    // Eliminar el enlace temporal del documento
    document.body.removeChild(enlaceTemporal);
}

document.getElementById('cartelera').addEventListener('click', function () {
    redirigirCartelera();
});

function redirigirCartelera() {
    // URL de la página de destino
    const urlDestino = 'https://alansuarez98.github.io/tup-lc2-cine-app/'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en una nueva pestaña o ventana
    window.open(urlDestino, '_blank');
}
document.getElementById('buscadorGIF').addEventListener('click', function () {
    redirigirGIF();
});

function redirigirGIF() {
    // URL de la página de destino
    const urlDestino = 'https://buscadorgifthy.netlify.app/'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en una nueva pestaña o ventana
    window.open(urlDestino, '_blank');
}
document.getElementById('snakeGames').addEventListener('click', function () {
    redirigirSnake();
});

function redirigirSnake() {
    // URL de la página de destino
    const urlDestino = 'https://snakegameonline.netlify.app/'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en una nueva pestaña o ventana
    window.open(urlDestino, '_blank');
}
document.getElementById('calculadoraWeb').addEventListener('click', function () {
    redirigirMesa();
});

function redirigirMesa() {
    // URL de la página de destino
    const urlDestino = 'https://mesainfinitarosario.com.ar'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en una nueva pestaña o ventana
    window.open(urlDestino, '_blank');
}
document.getElementById('masProyectos').addEventListener('click', function () {
    redirigirMasProyectos();
});

function redirigirMasProyectos() {
    // URL de la página de destino
    const urlDestino = 'https://github.com/AlanSuarez98?tab=repositories'; // Reemplaza con la URL de tu página de destino

    // Redirigir a la página de destino en una nueva pestaña o ventana
    window.open(urlDestino, '_blank');
}

const btn = document.getElementById('enviarMSG');
const name = document.getElementById('from_name');
const email = document.getElementById('email_id');
const tema = document.getElementById('from_tema');
const mensaje = document.getElementById('message');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_fgygqic';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                name.value = '';
                email.value = '';
                tema.value = '';
                mensaje.value = '';
                alert('¡Envio exitoso!');
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                name.value = '';
                email.value = '';
                tema.value = '';
                mensaje.value = '';
                alert(JSON.stringify(err));
            });
    });

var año = document.getElementById("año-actual");
año.innerHTML = new Date().getFullYear();

function removeBrOnLargeScreen() {
    // Obtener el ancho de la pantalla
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Verificar si el ancho de la pantalla es mayor a 768px
    if (screenWidth > 768) {
        // Obtener el elemento div
        var p = document.getElementById("descriHead");
        var h1 = document.getElementById("titulo");

        // Obtener todos los elementos <br> dentro del div
        var brElements = p.getElementsByTagName("br");
        var brElements2 = h1.getElementsByTagName("br");

        // Eliminar cada elemento <br>
        while (brElements.length > 0) {
            brElements[0].parentNode.removeChild(brElements[0]);
            brElements2[0].parentNode.removeChild(brElements2[0]);
        }
    }
}

// Llamar a la función al cargar la página y cada vez que se redimensione la ventana
removeBrOnLargeScreen();
window.addEventListener("resize", removeBrOnLargeScreen);

// Obtenemos el elemento <i> y el div correspondiente por su ID
const clickableIcon = document.querySelector('.btnBars');
const miDiv = document.getElementById('contenedor1');

// Añadimos un evento de clic al elemento <i>
clickableIcon.addEventListener('click', () => {
    // Comprobamos si el div está oculto o visible
    if (miDiv.style.visibility === 'hidden') {
      // Si está oculto, lo mostramos cambiando la propiedad display a "block"
      miDiv.style.visibility = 'visible';
    } else {
      // Si está visible, lo ocultamos cambiando la propiedad display a "none"
      miDiv.style.visibility = 'hidden';
    }
  });