var modal = document.getElementById("modal")
var textarea = document.getElementById("escribir")
var boton = document.getElementById("publicar")
var board = document.getElementById("board")

function ocultarModal(){
    modal.classList.add("ocultar")
}

function mostrarModal(){
    modal.classList.remove("ocultar")
}

function activarBoton(){
    var value = textarea.value
    if( value ===""){
        boton.classList.remove("activarButton")
        boton.classList.add("deButton")
        boton.disabled = true;
    } else {
        boton.classList.remove("deButton")
        boton.classList.add("activarButton")
        boton.disabled = false;
    }
}

function publicar() {
    var texto = textarea.value;
    board.classList.remove("ocultar")
    board.innerHTML += ` <div class="persona">
    <img
      class="fotos" id="foto1"
      src="https://i.pinimg.com/736x/b5/49/41/b5494197b2d462c940f88988b203d290.jpg"
      alt="foto-perfil"
    />
    <h3 id="nombre">Sofía Romero</h3>
  </div>

    <p>
${texto}
    </p>`;

  }

  boton.addEventListener("click", publicar);

  var consoleLog = document.getElementById("texto");

function log(message) {
  consoleLog.innerHTML += message }

/*function publicar() {
    var texto = textarea.value;

    // Crear un nuevo elemento div para la publicación
    var publicacion = document.createElement("div");
    publicacion.classList.add("publicacion");

    // Crear un nuevo elemento p para el texto
    var textoPublicacion = document.createElement("p");
    textoPublicacion.textContent = texto;

    // Agregar el texto al elemento div de la publicación
    publicacion.appendChild(textoPublicacion);

    // Agregar la publicación al segundo div con clase modal
    var segundoModal = document.querySelectorAll(".modal")[1];
    segundoModal.appendChild(publicacion);

    console.log(texto);
  }*/