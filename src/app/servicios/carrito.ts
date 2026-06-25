import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  productos: Producto[] = [];

  obtenerProductos() {

    return this.productos;

  }

  agregarProducto(producto: Producto) {

    const productoExistente = this.productos.find(

      (p => p.id === producto.id)

    );

    if (productoExistente) {

      productoExistente.cantidad++;

    } else {

      this.productos.push(producto);
    }

  }

  eliminarProducto(id: number) {
    if (id !== -1) {

      this.productos.splice(id, 1);

    }
  }

  aumentarProducto(id: number) {

    const prod = this.productos.find(x => x.id == id )
    if (prod){
     prod.cantidad++;
    }
  }

  restarProducto(id: number) {

    const prod = this.productos.find(x => x.id == id )
    if (prod){
     prod.cantidad--;
    }
  }
}