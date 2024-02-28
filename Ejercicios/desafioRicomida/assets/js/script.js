var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})


$('#ingredientes1 p').on('dblclick', function() {
    $(this).css({
        "color": "#dc3545"
    });
});

$('#preparacion1 p').on('dblclick', function() {
    $(this).css({
        "color": "#dc3545"
    });
});


$(".card1").click(function() {
    $(".dcard1").toggle();
});



$('#enviarCorreo').click(function() {
    alert("el correo fue enviado correctamente");
    $('.miToggle').toggle();
});