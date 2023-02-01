import { CasoUsoEmpleado } from '../casos-usos/caso-uso-empleado.js'
import { RepositorioEmpleado } from '../repositorio/repositorio-empleado.js'
import { RenderTemplate } from './table-render.js'

const repositorioEmpleado = new RepositorioEmpleado()
const casoUsoEmpleado = new CasoUsoEmpleado(repositorioEmpleado)
const renderTemplate = new RenderTemplate(repositorioEmpleado.empleados)


// agregando referencia de eventos a los botones
const tbody = document.querySelector("#id-table-empleados > tbody");
const btnAddEmpleado = document.querySelector('#id-btn-agregar')
const btnCalcularEdad = document.querySelector('#id-btn-calcular-edad')
const btnCalcularAntiguedad = document.querySelector('#id-btn-calcular-antiguedad')
const btnCalcularPrestaciones = document.querySelector('#id-btn-calcular-prestaciones')

btnAddEmpleado.addEventListener('click', (event) => {

  const cedula = document.querySelector('#id-text-identidad').value
  const nombre = document.querySelector('#id-text-nombre').value
  const apellido = document.querySelector('#id-text-apellido').value

  const elementEdad = document.querySelector('#id-number-edad')
  const elementAntiguedad = document.querySelector('#id-number-antiguedad')
  const elementPrestaciones = document.querySelector('#id-number-prestaciones')

  if (!elementEdad.value || !elementAntiguedad.value || !elementPrestaciones.value) {
    alert('falta calcular el edad o antiguedad o prestaciones')
    return
  }

  const data = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido
  }
  casoUsoEmpleado.addEmpleado(data)
  tbody.innerHTML = renderTemplate.render()

});

btnCalcularEdad.addEventListener('click', (event) => {
  let fechaNacimiento = document.getElementById('id-date-fecha-nacimiento').value

  const hoy = new Date()
  fechaNacimiento = new Date(fechaNacimiento)

  const edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  document.getElementById('id-number-edad').value = edad

})

btnCalcularAntiguedad.addEventListener('click', (event) => {
  let fechaIngreso = document.getElementById('id-fecha-ingreso').value

  const hoy = new Date()
  fechaIngreso = new Date(fechaIngreso)

  const antiguedad = hoy.getFullYear() - fechaIngreso.getFullYear()
  document.getElementById('id-number-antiguedad').value = antiguedad

})

btnCalcularPrestaciones.addEventListener('click', (event) => {
  const antiguedad = Number(document.getElementById('id-number-antiguedad').value)
  const salario = Number(document.getElementById('id-number-salario').value)

  const prestaciones = (antiguedad * salario) / 12
  document.getElementById('id-number-prestaciones').value = prestaciones.toFixed(2)

})
