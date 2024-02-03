//Create a temporary structure to store the structure created in the following step
let temporal = document.createDocumentFragment();
// Create a section with three children: a comment and two articles. Each one must have a
// paragraph and a link to www.duckduckgo.com
let section = document.createElement("section");
let commentario = document.createComment("Esto es un comentario");
section.appendChild(commentario);

for (let i = 0; i < 2; i++) {
    let article = document.createElement("article");
    let parrafo = document.createElement("p");
    let link = document.createElement("a");
    link.href = 'https://www.duckduckgo.com';
    link.textContet = "Link a DuckDuckGo";
    parrafo.appendChild(link);
    article.appendChild(parrafo);
    section.appendChild(article);
}

temporal.appendChild(section);
// Attach the temporary structure to the real DOM
document.body.appendChild(temporal);
// Clone the previous section to a new one
let clon = section.cloneNode(true);
document.body.appendChild(clon);
// Remove the content inserted at step 3
document.body.removeChild(section);
// Check if the temporary structure exists and is connected to the DOM
if(temp.isConnected) {
    console.log("Esta conectado");
} else {
    console.log("No esta conectado");
}
// Connect the temporary structure to the DOM
document.body.appendChild(temporal);
// Remove all the elements on the list marked as vegetables
let vegetales = document.querySelectorAll(".verdura");
vegetales.forEach(veg => veg.remove());
// Replace the paragraph of the first article inserted on step 7 with the last paragraph of the document
let primerArticulo = document.querySelector("article:first-of-type");
let ultimoParrafo = document.querySelector("p:last-of-type");
primerArticulo.replaceChild(ultimoParrafo.cloneNode(true), primerArticulo.querySelector("p"));
// Insert a paragraph after any image with the name of the file
let imagenes = document.querySelectorAll("img");
imagenes.forEach(img => {
    let parrafo = document.createElement("p");
    parrafo.textContent = img.src.split("/").pop();
    img.parentNode.insertBefore(parrafo, img.nextSibling);
});
// Insert a comment before any image
imagenes.forEach(img => {
    let comentario = document.createComment("Esto esta en la imagen");
    img.parentNode.insertBefore(comentario, img);
});
// Insert a paragraph before the first and after the last child
let primerHijo = document.body.firstChild;
let ultimoHijo = document.body.lastChild;
let primerParrafo = document.createElement("p");
primerParrafo.textContent = "Este es el primer Hijo";
let ultimoParrafo = document.createElement("p");
ultimoParrafo.textContent = "Este es el ultimo Hijo";
document.body.insertBefore(primerParrafo, primerHijo);
document.body.appendChild(ultimoParrafo);
// Replace all content of the first article inserted at step 7
primerArticulo.textContent = "Nuevo contenido para el primer articulo";
// Repace, from the content of any article inserted at step 7, only paragraphs
primerArticulo.querySelectorAll("p").forEach(p => p.textContent = "Nuevo contenido para el parrafo");
// Insert a descriptive text before the article of the cat
let catArticulo = document.querySelector("#gato");
let catTexto = document.createElement("p");
catTexto.textContent = "Esto es el articulo del gato";
catArticulo.parentNode.innerBefore(catTexto, catArticulo);
// Insert a nice message about cats after its section
let catSection = document.querySelector("#animales");
let catMensaje = document.createElement("p");
catMensaje.textContent = "Los gatos son maravillosos";
catSection.parentNode.insertBefore(catMensaje, catSection.nextSibling);
// Replace the mixed shopping list with two lists: one for vegetables and one for fruits
let listaCompra = document.querySelector("#listaCompra");
let verduras = document.createElement("ul");
let frutas = document.createElement("ul");
let listaVerduras = listaCompra.querySelectorAll(".verdura");
let listaFrutas = listaCompra.querySelectorAll(".fruta");
listaVerduras.forEach(verdura => listaVerduras.appedChild(verdura.cloneNode(true)));
listaFrutas.forEach(fruta => listaFrutas.appedChild(fruta.cloneNode(true)));
listaCompra.parentNode.replaceChild(verduras, listaCompra);
listaCompra.parentNode.replaceChild(frutas, listaCompra);