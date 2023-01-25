class Persona {
  constructor(cedula, nombre, apellido, genero, fechaNacimiento, foto) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.fechaNacimiento = fechaNacimiento;
    this.foto = foto;
  }
}

class Empleado extends Persona {

  constructor(cedula, nombre, apellido, genero, fechaNacimiento, foto, fechaIngreso, salarioBasico) {
    super(cedula, nombre, apellido, genero, fechaNacimiento, foto);
    this.fechaIngreso = fechaIngreso;
    this.salarioBasico = salarioBasico;
  }

  toString() {
    return JSON.stringify(this)
  }

  toJson() {
    return JSON.parse(this)
  }

}

export {
  Empleado
}
