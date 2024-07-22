// Esperamos a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
  
    // Usamos getElementById para obtener el elemento con id "titulo"
    let titulo = document.getElementById("titulo");
    
    // Usamos getElementsByClassName para obtener todos los elementos con la clase "parrafo"
    let parrafos = document.getElementsByClassName("parrafo");
    
    // Usamos getElementsByTagName para obtener todos los elementos <li>
    let elementosLista = document.getElementsByTagName("li");
    
    // Usamos querySelector para obtener el primer botón con id "cambiarTexto"
    let botonCambiarTexto = document.querySelector("#cambiarTexto");
    
    // Usamos querySelectorAll para obtener todos los botones
    let botones = document.querySelectorAll("button");
  
    // Modificar elementos del DOM
  
    // Cambiar el texto del título
    titulo.textContent = "Nuevo Título: Manipulación del DOM con JavaScript";
  
    // Cambiar el color de fondo del primer párrafo
    parrafos[0].style.backgroundColor = "yellow";
  
    // Agregar un nuevo elemento a la lista
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo Elemento";
    document.getElementById("lista").appendChild(nuevoElemento);
  
    // Eventos
  
    // Agregar un evento click al botón "cambiarTexto"
    botonCambiarTexto.addEventListener("click", function() {
      // Cambiar el texto del segundo párrafo al hacer clic en el botón
      parrafos[1].textContent = "El texto ha sido cambiado!";
    });
  
    // Agregar un evento click al segundo botón para cambiar el color del título
    botones[1].addEventListener("click", function() {
      // Cambiar el color del texto del título al hacer clic en el botón
      titulo.style.color = "blue";
    });
  
    // Recorrer y modificar elementos con un bucle
  
    // Cambiar el color de fondo de todos los elementos de la lista
    for (let i = 0; i < elementosLista.length; i++) {
      elementosLista[i].style.backgroundColor = "lightgreen";
    }
  });
  