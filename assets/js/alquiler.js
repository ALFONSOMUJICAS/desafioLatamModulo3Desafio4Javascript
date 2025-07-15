document.getElementById("alquiler-container").innerHTML = propiedades_alquiler
  .map(
    (prop) => `<div class="card">
  <img src="${prop.src}" alt="${prop.nombre}" />
  <h3>${prop.nombre}</h3>
  <p>${prop.descripcion}</p>
  <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
  <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
  <p><strong>Precio:</strong> $${prop.costo}</p>
  <p><strong>Fumar:</strong> ${prop.smoke ? "✔️" : "❌"}</p>
  <p><strong>Mascotas:</strong> ${prop.pets ? "✔️" : "❌"}</p>
</div>`
  )
  .join("");
