const boton = document.getElementById('siguiente-pagina')

boton.onclick = saludar

function saludar() {
  // alert("Hola usuario");
  // boton.classList.remove("boton");
  // boton.classList.add("verde");
  const div = document.getElementById('texto')

  array.forEach(function(elemento) {
    const p = document.createElement('p')
    p.textContent = elemento
    div.appendChild(p)
  })
}

const array = ['Martin', 1, 'Quintana', 500]

// Manejar el campo de texto
const nombre = document.getElementById('nombre')
const enviar = document.getElementById('enviar')

enviar.onclick = mostrarNombre

function mostrarNombre() {
  if (!nombre.value) {
    return alert('Por favor ingrese el nombre')
  }

  alert(`Bienvenido ${nombre.value}`)
}
