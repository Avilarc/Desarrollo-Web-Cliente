document.getElementById("city-input").addEventListener("input", (event) => {
    let letra = event.target.value.toUpperCase();

    fetch('ciudades.php?letra=' + letra)
        .then(respuesta => respuesta.json())
        .then (datos => {
            let listaCiudades = document.getElementById('city-list');
            listaCiudades.innerHTML = '';

            datos.forEach(ciudad => {
                let parrafo = document.createElement('p');
                parrafo.textContent = ciudad;
                listaCiudades.appendChild(parrafo);
            });
        });
})