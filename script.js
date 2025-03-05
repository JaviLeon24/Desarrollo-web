$(document).ready(function () {

    $(".btn-actualizar").click(function () {
        $(".descripcion").text("Desarrollador con experiencia en tecnologías modernas.");
        $(".nombre").text("Javier Alejandro León Mendoza - Actualizado");
        alert("La información ha sido actualizada con éxito.");
    });

    $(".btn-tema").click(function () {
        $(".tarjeta").toggleClass("dark-mode");
        alert("El tema ha sido cambiado con éxito.");
    });
});
