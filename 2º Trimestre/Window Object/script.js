let newWindow;
//Open a new window having previously asked the user for the URL. It must take 4 seconds to open it.
function openWindow() {
    let url = window.prompt("Introduce la URL");
    setTimeout(() => {
        newWindow = window.open(url, "newWindow", "width=400,height=400");
    }, 4000);
}
//Resize the previously opened window, having previously asked the user for the new size
function resizeWindow() {
    let width = window.prompt("Introduce el ancho de la ventana");
    let height = window.prompt("Introduce el alto de la ventana");
    newWindow.resizeTo(width, height);
}

//Close the recently opened window with a button

function closeWindow() {
    newWindow.close();
}

//Open a new window again and create a function that asks the user for a time in seconds. Show the descendant count and when it gets to 0, close the last opened window.

function openAndCountdown() {
    let url = window.prompt("Introduce la URL");
    newWindow = window.open(url, "newWindow", "width=400,height=400");
    let time = window.prompt("Introduce el tiempo en segundos");
    let cuentaAtras = setInterval(() => {
       console.log(time);
       time--;
       if (time < 0) {
           clearInterval(cuentaAtras);
           newWindow.close();
       }
    },1000);
}