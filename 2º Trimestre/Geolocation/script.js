//variables
let caja_mensajes = document.getElementById("caja_mensajes");
let mapa;
let marcador;
let opciones = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
};
let posicionInicial = null;
let distanciaTotal = 0;
let destino = null;
let directionsService;
let directionsRenderer;
let geocoder;
let ruta = [];

// Inicializa el servicio de direcciones y el renderizador de direcciones
function initMap() {
    geocoder = new google.maps.Geocoder();
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
}

//mostrar las coordenadas en un mapa, eligiendo la API de geolocalización que desee, junto con un marcador en la ubicación
// mostrar la posición aunque el usuario se mueva
let obtenerPosicion = () => {
    if(navigator.geolocation) {
        navigator.geolocation.watchPosition(mostrarPosicion, mostrarError, opciones);
    } else {
        caja_mensajes.innerHTML = "El navegador no soporta la geolocalización";
    }
};

let mostrarPosicion = (posicion) => {
    caja_mensajes.innerHTML = "Latitud: " + posicion.coords.latitude + "<br>Longitud: " + posicion.coords.longitude;
    pintar_mapa(posicion);

    obtenerDireccion(posicion, function(direccion) {
        caja_mensajes.innerHTML += "<br>Dirección: " + direccion;
    });

    if(posicionInicial === null) {
        posicionInicial = posicion;
    } else {
        let distancia = calcularDistancia(posicionInicial, posicion);
        distanciaTotal += distancia;
        posicionInicial = posicion;
        caja_mensajes.innerHTML += "<br>Distancia recorrida: " + distanciaTotal.toFixed(2) + " metros";
        //imprimira minimo siempre 10m por que es el error de exactitud al obtener la posicion
    }

    if (destino !== null) {
        let distancia = calcularDistancia(posicion, destino);
        caja_mensajes.innerHTML += "<br>Distancia al destino: " + distancia.toFixed(2) + " metros";
    }

    ruta.push({lat: posicion.coords.latitude, lng: posicion.coords.longitude});
    ruta.push({lat: posicion.coords.latitude, lng: posicion.coords.longitude});
    dibujarRutaUsuario();
};

let mostrarError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            caja_mensajes.innerHTML = "El usuario no ha permitido el acceso a la geolocalización";
            break;
        case error.POSITION_UNAVAILABLE:
            caja_mensajes.innerHTML = "Información de la geolocalización no disponible";
            break;
        case error.TIMEOUT:
            caja_mensajes.innerHTML = "Tiempo de espera agotado";
            break;
        case error.UNKNOWN_ERROR:
            caja_mensajes.innerHTML = "Error desconocido";
            break;
    }
};

let pintar_mapa = (posicion) => {
    mapa = new google.maps.Map(document.getElementById('map'), {
        center: {lat: posicion.coords.latitude, lng: posicion.coords.longitude},
        zoom: 13
    });

    marcador = new google.maps.Marker({
        position: {lat: posicion.coords.latitude, lng: posicion.coords.longitude},
        map: mapa,
        title: 'Mi posición'
    });
};

//medir la distancia recorrida.
let calcularDistancia = (pos1, pos2) => {
    const R = 6371e3; // Radio de la Tierra en metros
    const lat1 = pos1.coords.latitude * Math.PI / 180;
    const lat2 = pos2.coords.latitude * Math.PI / 180;
    const deltaLat = (pos2.coords.latitude - pos1.coords.latitude) * Math.PI / 180;
    const deltaLon = (pos2.coords.longitude - pos1.coords.longitude) * Math.PI / 180;

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
};

//permitir calcular y dibujar la ruta desde mi ubicación actual hasta un lugar determinado.
function dibujarRuta() {
    if (posicionInicial !== null && destino !== null) {
        let request = {
            origin: new google.maps.LatLng(posicionInicial.coords.latitude, posicionInicial.coords.longitude),
            destination: new google.maps.LatLng(destino.coords.latitude, destino.coords.longitude),
            travelMode: 'DRIVING'
        };

        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
                directionsRenderer.setMap(mapa);
            }
        });
    }
}

document.getElementById('destino').addEventListener('click', () => {
    let latitud = parseFloat(document.getElementById('latitud_destino').value);
    let longitud = parseFloat(document.getElementById('longitud_destino').value);

    if (isNaN(latitud) || isNaN(longitud)) {
        caja_mensajes.innerHTML = "Por favor, introduce una latitud y una longitud válidas";
    } else {
        destino = {
            coords: {
                //coordenadas del instituto
                latitude: latitud, //37.19302
                longitude: longitud //-3.61642
            }
        };
        caja_mensajes.innerHTML = "Destino: " + destino.coords.latitude + ", " + destino.coords.longitude;
        dibujarRuta();
    }
});

//permitir conocer la dirección de su ubicación (geocodificación inversa)
function obtenerDireccion(posicion, callback) {
    geocoder.geocode({'location': new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude)}, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                callback(results[0].formatted_address);
            } else {
                callback('No se encontraron resultados');
            }
        } else {
            callback('Geocoder failed due to: ' + status);
        }
    });
}

//permitir dibujar la ruta que haya seguido el usuario en el mapa
function dibujarRutaUsuario() {
    let rutaPolyline = new google.maps.Polyline({
        path: ruta,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    rutaPolyline.setMap(mapa);
}