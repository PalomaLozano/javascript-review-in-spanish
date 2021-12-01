//classes

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProducto() {
    return `${this.nombre} cuesta ${this.precio}`;
  }
}

const producto2 = new Producto('Monitor curvo 60"', 800);
const producto3 = new Producto('Tv  60"', 1800);

//Herencia => forma de pasar atributos de un lado al otro (extends) Producto es el padre y Libro es el hijo (libro hereda los métodos de Producto) Es una forma de evitar repetir código

class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    //isbn no se añade porque no existe en la clase Producto
    this.isbn = isbn;
  }
  formatearProducto() {
    return `El libro ${super.formatearProducto()} y su ISBN es ${this.isbn}`;
  }
}

const libro = new Libro('JavaScript la Revolución', 50, 'frsefrse');

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(libro.formatearProducto());
