$(document).ready(function() {
    var digimonList = [];

    // Cargar todos los Digimon de la API
    $.getJSON("https://digimon-api.vercel.app/api/digimon", function(data) {
        $.each(data, function(index, value) {
            digimonList.push(value);
        });
    });

    // Buscar Digimon por nombre o nivel
    $("#search-button").click(function() {
        var searchTerm = $("#search-input").val().toLowerCase();
        var filteredDigimonList = digimonList.filter(function(digimon) {
            return digimon.name.toLowerCase().includes(searchTerm) || digimon.level.toLowerCase().includes(searchTerm);
        });
        showDigimonList(filteredDigimonList, searchTerm);
    });

    // Función para mostrar la lista de Digimon en la página
    function showDigimonList(digimonList, searchTerm) {
        var digimonListHtml = "";
        $.each(digimonList, function(index, digimon) {
            if (searchTerm === undefined || searchTerm === "" || digimon.name.toLowerCase().includes(searchTerm)) {
                digimonListHtml += `
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">${digimon.name}</h2>
                        <p class="card-subtitle mb-2 text-muted">${digimon.level}</p>
                        <img src="${digimon.img}" alt="${digimon.name}" class="img-fluid">
                    </div>
                </div>
                `;
            }
        });

        if (digimonListHtml === "") {
            digimonListHtml = `<p>No Digimon found for "${searchTerm}"</p>`;
        }

        $("#digimon-list").html(digimonListHtml);
        $("#digimon-list").show();
    }
});
//--------------nav-----------------
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('nav.navbar').addClass('fixed-top');
    } else {
      $('nav.navbar').removeClass('fixed-top');
    }
  });

  //----------cancion--------------------------------------
  const audio = document.getElementById("audio-player");
  const btnAudio = document.getElementById("btn-toggle-song");
  
  btnAudio.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      btnAudio.innerHTML = "Desactivar canción";
    } else {
      audio.pause();
      btnAudio.innerHTML = "Activar canción";
    }
  });
  