import { Empleado } from "../entidad/empleado.js";

export class CasoUsoEmpleado {

  constructor(repositorioEmpleado) {
    this.repositorioEmpleado = repositorioEmpleado;
  }

  addEmpleado(data) {

    if (!this.existeEmpleado(data.cedula)) {

      const empleado = new Empleado(
        data.cedula,
        data.nombre,
        data.apellido
      );

      this.repositorioEmpleado.addEmpleado(empleado);

    } else {
      alert('El empleado ya existe')
    }

  }

  existeEmpleado(cedula) {
    const empleado = this.repositorioEmpleado.buscarEmpleado(cedula)
    return empleado ? true : false;
  }

}
