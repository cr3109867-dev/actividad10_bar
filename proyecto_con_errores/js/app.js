const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

function reservarMesa() {
  const reservas = document.getElementById("reservas");
  reservas.scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("reservationForm");
const mensaje = document.getElementById("mensajeReserva");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const personas = Number(document.getElementById("personas").value);
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const zona = document.getElementById("zona").value;

  if (nombre.length < 3) {
    mensaje.textContent = "Ingresa un nombre válido.";
    return;
  }

  if (!/^3\d{9}$/.test(telefono)) {
    mensaje.textContent = "El teléfono debe tener 10 dígitos y comenzar por 3.";
    return;
  }

  if (personas < 1 || personas > 12) {
    mensaje.textContent = "La reserva debe ser entre 1 y 12 personas.";
    return;
  }

  if (!fecha) {
    mensaje.textContent = "Selecciona una fecha válida.";
    return;
  }

  if (!hora) {
    mensaje.textContent = "Selecciona una hora válida.";
    return;
  }

  if (!zona) {
    mensaje.textContent = "Selecciona una zona preferida.";
    return;
  }

  mensaje.textContent = `✅ Reserva confirmada para ${nombre} el ${fecha} a las ${hora} en ${zona}.`;

  form.reset();
});