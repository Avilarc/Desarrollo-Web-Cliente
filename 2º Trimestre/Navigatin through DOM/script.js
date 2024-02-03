//Include a new class at the parent of the image of the cat
let catImagen = document.querySelector("gato img");
catImagen.parentElement.classList.add("nuevaClase");
// Include a new class at any child of the section with ID "animales"
let animales = document.querySelector("#animales");
animales.firstElementChild.classList.add("nuevaClase");
// List all children of the form
let form = document.querySelector("formulario-contacto");
console.log(form.children);
// Change the text of the first and the last element of the shopping list
let listaCompra = document.querySelector("#listaCompra");
listaCompra.firstElementChild.textContent = "Nuevo primer Objeto";
listaCompra.lastElementChild.textContent = "Nuevo ultimo Objeto";
// Change the text of the first label of the form
let primerLabel = form.querySelector("label");
primerLabel.textContent = "Nuevo texto del label";
// Console out the type of the parent node of the image of the dog
let dogImagen = document.querySelector("#perro img");
console.log(dogImagen.parentNode.nodeName);
// Console out the type of the previous sibling of the article where is the cat
let catArticle = document.querySelector("#gato");
console.log(catArticle.previousElementSibling.nodeName);