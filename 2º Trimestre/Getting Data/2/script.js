//construcción de la url para la petición a la API de Marvel
const API_PUBLIC_KEY = "f1b7c3e378e6ff6261de3f33544fd8ac";
const API_PRIVATE_KEY = "fb6276282b76838901787e9f1b66fffe996b5ed6";
const API_URL = 'https://gateway.marvel.com/v1/public/characters';

const ts = new  Date().getTime();
const hash = CryptoJS.MD5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY).toString();

const url = `${API_URL}?ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

document.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            const heroes = document.getElementById('heroes');

            datos.data.results.forEach(heroe => {
                const img = document.createElement('img');
                img.src = `${heroe.thumbnail.path}/portrait_xlarge.${heroe.thumbnail.extension}`;
                img.alt = heroe.name;
                img.addEventListener('click', () => {
                    fetchComics(heroe.id, heroe.name);
                });

                const nombre = document.createElement('h2')
                nombre.textContent = heroe.name;



                const heroesContenedor = document.createElement("div");
                heroesContenedor.appendChild(img);
                heroesContenedor.appendChild(nombre);

                heroes.appendChild(heroesContenedor);
            });

            heroes.style.display = 'flex';
            heroes.style.flexDirection = 'row';
            heroes.style.flexWrap = 'wrap';
            heroes.style.justifyContent = 'space-around';
        })
})

function fetchComics(id, name) {
    const comicsUrl = `${API_URL}/${id}/comics?ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

    fetch(comicsUrl)
        .then(respuesta => respuesta.json())
        .then(datos => {
           const comics = document.getElementById('comics');
           comics.innerHTML = '';

           datos.data.results.forEach(comic => {
                const img = document.createElement('img');
                img.src = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;
                img.alt = comic.title;

                const titulo = document.createElement('h3');
                titulo.textContent = comic.title;

                const comicContenedor = document.createElement('div');
                comicContenedor.appendChild(img);
                comicContenedor.appendChild(titulo);
                comicContenedor.style.zIndex = "1";
                comicContenedor.style.backgroundColor = "red";
                comicContenedor.style.display = 'flex';
                comicContenedor.style.flexDirection = 'row';
                comicContenedor.style.flexWrap = 'wrap';
                comicContenedor.style.justifyContent = 'space-around';
                comicContenedor.style.top = '100%';
                comicContenedor.style.left = '0';
                comicContenedor.style.width = '100%';

                const tituloComic = document.getElementById("titulo-heroe");
                tituloComic.innerHTML = '';
                tituloComic.textContent = "Comics de : " + name;

                comics.appendChild(comicContenedor);
           });


        })
}
