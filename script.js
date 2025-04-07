// Obtener la referencia del botón backToTop por su ID.
const backToTop = document.getElementById('backToTop');

// Escuchar el evento de "scroll" en la ventana.
window.addEventListener('scroll', () => {
  // Si el usuario baja más de 200 pixeles, activar la visibilidad del botón, sino ocultarlo.
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
// Cuando el usuario presiona el botón, subir hasta el comienzo de la página.
backToTop.addEventListener('click', () => {
  // Volver al principio con un movimiento fluido.
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Obtener el elemento "form" de la página.
const form = document.querySelector("form");

// Escuchar el evento de "submit" cuando el usuario envia el formulario.
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  // Obtener los valores del formulario.
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  // Mostrar los valores por consola.
  console.log("Nombre:", name);
  console.log("Email:", email);
  console.log("Mensaje:", message);

  // Feedback de alerta para el usuario.
  alert('¡Gracias, ${name}! Tu mensaje ha sido enviado.');
});