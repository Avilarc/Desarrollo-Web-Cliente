document.getElementById("abreme").addEventListener("click", (evento) => {
    // Open a new window with a random URL
    let nuevaVentana = window.open("http://127.0.0.1:5500/Location/index.html", "nuevaVentana", "_blank");
    // Change its URL once opened
    nuevaVentana.location.href = "https://github.com";
    // Reload this URL using cache content
    nuevaVentana.location.reload();
    // Print information about the URL
    console.log("Protocolo: " + nuevaVentana.location.protocol);
    console.log("Host: " + nuevaVentana.location.host);
    console.log("Hostname: " + nuevaVentana.location.hostname);
    console.log("Puerto: " + nuevaVentana.location.port);
});