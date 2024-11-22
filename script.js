const abrirInvitacion = document.getElementById('primerTexto');
const invitacion = document.getElementById('invitacion')

function verInvitacion() {
    // Añade clase para animación tipo flash
    abrirInvitacion.classList.add('flash-animation');

    // Espera a que termine la animación antes de ocultar y mostrar
    setTimeout(() => {
        abrirInvitacion.style.display = 'none';
        invitacion.style.display = 'flex';
    }, 500); // Duración de la animación (0.5s)
}
