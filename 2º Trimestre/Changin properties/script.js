//Downgrade the h1 tag to an h2 one
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
h2.innerHTML = h1.innerHTML;
h1.parentNode.replaceChild(h2, h1);
//Replace only h2 content with a new text
h2.textContent = "Nuevo Texto";
//Modify the first image source and alt properties
let primeraImagen = document.querySelector("img:first-child");
primeraImagen.src = "https://picsum.photos/200/300";
primeraImagen.alt = "Imagen de prueba";
//Replace the text of any p tag with "Hello, I'm a paragraph"
let parrafos = document.querySelector("p");
parrafos.textContent = "Hola, soy un párrafo";
//Modify the second image text
let segundaImagen = document.querySelector("img:nth-child(2)");
segundaImagen.textContent = "Imagen 2";
//Assign a non-standard property to body called info-fecha and assign today's date
document.body.setAttribute("info-fecha", new Date().toISOString());
//Modify first image alt text
primeraImagen.alt = "Texto modificado de la imagen 1";
//Console out all first image attributes
for(let i= 0; i< primeraImagen.attributes.length; i++){
    console.log(primeraImagen.attributes[i].name + ": " + primeraImagen.attributes[i].value);
}
//Change last image property "size" (after checking that exists)
let ultimaImagen = document.querySelector("img:last-child");
if(ultimaImagen.hasAttribute("size")){
    ultimaImagen.setAttribute("size", "400");
}
//Add an id="ultima_imagen" to the last image
ultimaImagen.id = "ultima_imagen";
//Add an attribute tipo="parrafo" to all p
parrafos.forEach(p => p.setAttribute("tipo", "parrafo"));
//Add a text to each element in the list (must be scalable)
let elementosLista = document.querySelectorAll("li");
elementosLista.forEach((li, index) => li.textContent += `Item ${index + 1})`);
//Add a paragraph after the last element with a text counting the number of items in the list
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = `Hay ${elementosLista.length} elementos en la lista`;
elementosLista.item(-1).after(nuevoParrafo);
//Add a paragraph, at the end of the document, containing how many classes has the
// last paragraph of the first article and their names
let ultimoParrafoPrimerArticulo = document.querySelector('article').querySelectorAll('p').item(-1);
let parrafoInfoClase = document.createElement('p');
parrafoInfoClase.textContent = `El último párrafo del primer artículo tiene ${ultimoParrafoPrimerArticulo.classList.length} clases: ${Array.from(ultimoParrafoPrimerArticulo.classList).join(', ')}.`;
document.body.appendChild(parrafoInfoClase);
//Add two classes to the previous paragraph: "clase1" and "clase2"
parrafoInfoClase.classList.add('clase1', 'clase2');
//Remove the last created class
parrafoInfoClase.classList.remove('clase2');
//Add a boolean attribute to the first image
primeraImagen.setAttribute('data-boolean', '');