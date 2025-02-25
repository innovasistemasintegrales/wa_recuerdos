// Funcion para crear un nuevo album
document
    .getElementById('botonCrearAlbum')
    .addEventListener('click', function () {
        Swal.fire({
            title: 'Crear un nuevo album',
            html: `
		<input type="text" id="nombre" class="swal2-input" placeholder="Nombre" required>
            
            <input type="email" id="email" class="swal2-input" placeholder="Correo" list="listaCorreos" required>
            <datalist id="listaCorreos"></datalist>

            <div>
                <label>
                    <input type="radio" name="opcion" value="opcion1"> Opción 1
                </label>
                <label>
                    <input type="radio" name="opcion" value="opcion2"> Opción 2
                </label>
            </div>

            <textarea id="mensaje" class="swal2-textarea" placeholder="Mensaje" required></textarea>`,
            showCloseButton: true,
            confirmButtonText: 'Crear Album',
            showCancelButton: true,
            backdrop: 'rgba(0, 0, 0, 0.91)',
        }).then((result) => {});
    });

// Funcion para cerrar sesion
function cerrarSesion(userName) {
    Swal.fire({
        title: '¿Deseas cerrar sesion?',
        text: `${userName}, se cerrará tu cuenta en este dispositivo.`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#40a748',
        cancelButtonColor: '#ed1515',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        backdrop: 'rgba(0, 0, 0, 0.91)',
    }).then((result) => {
        if (result.isConfirmed) {
        }
    });
}
