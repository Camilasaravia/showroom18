const botones = document.querySelectorAll('.btn');
botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    alert("Producto agregado al carrito 🛒");
  });
});