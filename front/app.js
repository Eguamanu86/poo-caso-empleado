import { CasoUsoEmpleado } from '../casos-usos/caso-uso-empleado.js'
import { RepositorioEmpleado } from '../repositorio/repositorio-empleado.js'
import { RenderTemplate } from './table-render.js'

const repositorioEmpleado = new RepositorioEmpleado()
const casoUsoEmpleado = new CasoUsoEmpleado(repositorioEmpleado)
const renderTemplate = new RenderTemplate(repositorioEmpleado.empleados)


// agregando referencia de eventos a los botones
const tbody = document.querySelector("#id-table-empleados > tbody");
const btnAddEmpleado = document.querySelector('#id-btn-agregar')

btnAddEmpleado.addEventListener('click', (event) => {

  const cedula = document.querySelector('#id-text-identidad').value
  const nombre = document.querySelector('#id-text-nombre').value
  const apellido = document.querySelector('#id-text-apellido').value

  const data = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido
  }
  casoUsoEmpleado.addEmpleado(data)
  tbody.innerHTML = renderTemplate.render()

});
