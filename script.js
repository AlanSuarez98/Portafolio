let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Funcion para descargar archivo desde un button
function descargarArchivo() {
    // Nombre del archivo que deseas descargar
    var archivo = "CV-Alan-Suarez.pdf";
    
    // URL del archivo
    var url = "img/" + archivo;
  
    // Crear un objeto de anclaje
    var link = document.createElement('a');
  
    // Establecer los atributos del objeto de anclaje
    link.href = url;
    link.download = archivo;
    link.target = "_blank";
  
    // Simular un clic en el enlace de descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var boton = document.getElementById('enviar');

function mensaje(){
    alert("¡Enviado correctamente!");
}
  
  
  
  