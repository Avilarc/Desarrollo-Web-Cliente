//vamos a usar Blob para crear un archivo de texto y guardarlo en el disco duro del usuario.
//https://developer.mozilla.org/es/docs/Web/API/Blob

document.getElementById("guarda").addEventListener("click", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;

    const datos = `Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}`;

    const blob = new Blob([datos], { type: "text/plain" });
    saveAs(blob, "datos.txt");
});