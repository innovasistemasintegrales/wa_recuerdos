// Se agrega un listener al formulario para validar el campo "Usuario" usando popover
document.getElementById('formPopover').addEventListener('submit', function (event) {
    event.preventDefault();
    var usuario = document.getElementById('usuario');
    // Se obtiene la instancia del popover si ya fue inicializada
    var popover = bootstrap.Popover.getInstance(usuario);
    if (!usuario.value) {
      // Si no existe la instancia, se crea
      if (!popover) {
        popover = new bootstrap.Popover(usuario);
      }
      // Muestra el popover con el mensaje de error
      popover.show();
    } else {
      // Si el campo está completo, se oculta el popover (si existe) y se continúa
      if (popover) {
        popover.hide();
      }
      alert("Formulario enviado correctamente");
    }
  });
  