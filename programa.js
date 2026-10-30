    // Aqui se consolida  la logica del ejercicio  para registrar mascotas
     document.getElementById("formulario").addEventListener("submit", (e) =>{
        console.log("Mascota registrada");
            e.preventDefault(); //evitar que la pagina se recargue al enviar el formulario
            document.getElementById("mensaje").textContent = "Mascota registrada correctamente";
        });