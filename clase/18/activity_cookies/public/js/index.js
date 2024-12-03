console.log("Hola mundo")
function getCookies(e) {
    e.preventDefault();
    fetch("/api/cookies/getCookies")
      .then(response => response.json()) // Convierte la respuesta a JSON
      .then(data => console.log(data))   // Muestra las cookies
      .catch(error => console.error('Error:', error)); // Manejo de errores
  }
  