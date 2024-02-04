alert("Machu Music Official Page, DISCLAIMER: IF YOU SEE A RIP-OFF OF OUR PAGE, PLEASE REPORT INMEDIATLY WITH OUR TEAM")

function spanishElementChangeColor() {
    var track = document.getElementById("track-link");

    // Función para cambiar el color de texto
    function cambiarColor() {
        // Array con colores disponibles
        var colores = ["red", "blue", "green", "orange", "purple"];
        
        // Obtén un color aleatorio del array
        var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

        // Cambia el color de texto
        track.style.color = colorAleatorio;
    }

    // Cambia el color cada 1000 milisegundos (1 segundo)
    setInterval(cambiarColor, 1000);
}

