window.onload = myFunction;

function myFunction() {
  var h = document.getElementById('horas');
  var m = document.getElementById('minutos');
  var s = document.getElementById('segundos');
  var btnStart = document.getElementById('empezar');

  for (var i = 0; i < 24; i++) {
    h.innerHTML += '<option value="' + i + '">' + i + '</option>';
  }

  for (var i = 0; i < 60; i++) {
    m.innerHTML += '<option value="' + i + '">' + i + '</option>';
  }

  for (var i = 0; i < 60; i++) {
    s.innerHTML += '<option value="' + i + '">' + i + '</option>';
  }

  btnStart.addEventListener('click', function() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
      alert("Seleccione un rango de tiempo");
    } else {
      var c = document.getElementById('controlers');
      c.style.display = 'none';
      var segundos = s.value;
      var minutos = m.value;
      var horas = h.value;

      if (minutos < 10) {
        minutos = '0' + minutos;
      }

      if (horas < 10) {
        horas = '0' + horas;
      }

      var tempBox = document.getElementById('temp');
      tempBox.style.display = 'inline-block';

      var temporizador = setInterval(function() {
        if (segundos == 0 && minutos == "00" && horas == "00") {
          tempBox.innerText = horas + ':' + minutos + ':0' + segundos;
          alert("El temporizador ha finalizado");
          clearInterval(temporizador);
        } else {
          if (segundos < 10) {
            segundos = '0' + segundos;
          }

          if (segundos == "0-1") {
            segundos = 59;
            minutos--;

            if (minutos < 10) {
              minutos = '0' + minutos;
            }
          }

          if (minutos == "0-1") {
            minutos = 59;
            horas--;

            if (horas < 10) {
              horas = '0' + horas;
            }
          }
          tempBox.innerText = horas + ':' + minutos + ':' + segundos;
          segundos--;
        }
      }, 1000);
    }
  });
}
