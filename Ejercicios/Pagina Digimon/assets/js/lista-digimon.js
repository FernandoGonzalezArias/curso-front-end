$(document).ready(function() {
    // Obtener la lista de Digimon de la API
    $.getJSON("https://digimon-api.vercel.app/api/digimon", function(data) {
        var digimonNames = [];
        $.each(data, function(index, value) {
            digimonNames.push(value.name);
        });
        showDigimonNames(digimonNames);
    });

    // Función para mostrar la lista de nombres de Digimon en la página
    function showDigimonNames(digimonNames) {
        var digimonNamesHtml = "";
        $.each(digimonNames, function(index, name) {
            digimonNamesHtml += `
                <li class="list-group-item">${name}</li>
            `;
        });
        $("#digimon-names-list").html(digimonNamesHtml);
    }
});