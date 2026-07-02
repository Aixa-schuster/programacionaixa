import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: Producto[] = [];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {

    const productoExistente = this.productos.find(
      p => p.id === producto.id
    );

    if (productoExistente) {

      productoExistente.cantidad++;

    } else {

      this.productos.push({
        ...producto,
        cantidad: 1
      });

    }

  }

  aumentarProducto(id: number): void {

    const producto = this.productos.find(
      p => p.id === id
    );

    if (producto) {
      producto.cantidad++;
    }

  }

  restarProducto(id: number): void {

    const producto = this.productos.find(
      p => p.id === id
    );

    if (producto && producto.cantidad > 1) {
      producto.cantidad--;
    }

  }

  eliminarProducto(id: number): void {

    this.productos = this.productos.filter(
      p => p.id !== id
    );

  }

}