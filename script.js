document.addEventListener("DOMContentLoaded", function () {
    let botonActualizar = document.querySelector("button");
    let descripcion = document.querySelector(".descripcion");
    let nombre = document.querySelector(".nombre");

    botonActualizar.addEventListener("click", function () {
        descripcion.textContent = "Desarrollador con experiencia en tecnologías modernas.";
        nombre.textContent = "Javier Alejandro León Mendoza - Actualizado";
        alert("La información ha sido actualizada con éxito.");
    });
});