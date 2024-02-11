const fetchPromise1 = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
let section = document.getElementById("info");

document.addEventListener("click", (evento) => {
    let target = evento.target;
    switch (target.id) {
        case "showInfo":
            fetchPromise1.then(respuesta => {
                let resultado = respuesta.json();
                resultado.then(json => {
                    let lista = document.createElement("ul");
                    for (let key in json) {
                        let item = document.createElement("li");
                        item.textContent = key + ": ";

                        let subLista = document.createElement("ul");
                        if (typeof json[key] === "object") {
                            let nuevoObjeto = json[key];

                            for (const key2 in nuevoObjeto) {
                                let subItem = document.createElement("li");
                                subItem.textContent = key2 + ": ";

                                let subSubLista = document.createElement("ul");
                                if (typeof nuevoObjeto[key2] === "object") {
                                    let objetoInterno = nuevoObjeto[key2];

                                    for (const key3 in objetoInterno) {
                                        let subSubItem = document.createElement("li");
                                        subSubItem.textContent = key3 + ": " + objetoInterno[key3];
                                        subSubLista.appendChild(subSubItem);
                                    }
                                    subItem.appendChild(subSubLista);
                                } else {
                                    subItem.textContent += nuevoObjeto[key2];
                                }
                                subLista.appendChild(subItem);
                            }
                            item.appendChild(subLista);

                        } else {
                            item.textContent += json[key];
                        }
                        lista.appendChild(item);
                    }

                    section.appendChild(lista);
                })
            });
            break;
    }
})