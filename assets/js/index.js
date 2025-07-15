function crearCard(prop) {
  return `<div class="card">
    <img src="${prop.src}" alt="${prop.nombre}" />
    <h3>${prop.nombre}</h3>
    <p>${prop.descripcion}</p>
    <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
    <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
    <p><strong>Precio:</strong> $${prop.costo}</p>
    <p><strong>Fumar:</strong> ${prop.smoke ? "✔️" : "❌"}</p>
    <p><strong>Mascotas:</strong> ${prop.pets ? "✔️" : "❌"}</p>
  </div>`;
}

document.getElementById("venta-container").innerHTML = propiedades_venta
  .slice(0, 3)
  .map(crearCard)
  .join("");
document.getElementById("alquiler-container").innerHTML = propiedades_alquiler
  .slice(0, 3)
  .map(crearCard)
  .join("");
