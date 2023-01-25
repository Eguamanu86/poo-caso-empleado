export class RepositorioEmpleado {
  constructor() {
    this.empleados = []
  }

  addEmpleado(empleado) {
    this.empleados.push(empleado)
  }

  buscarEmpleado(cedula) {
    return this.empleados.filter((item) => item.cedula === cedula).shift()
  }

}
