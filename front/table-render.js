export class RenderTemplate {
  constructor(listObjects) {
    this.listObjects = listObjects
  }
  render() {

    const items = this.listObjects.map((item) => {
      return `<tr>
            <td>${item.cedula}</td>
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>M</td>
            <td>02-03-1986</td>
            <td>02-15-2023</td>
        </tr>`
    }).join('')

    return items
  }
}
