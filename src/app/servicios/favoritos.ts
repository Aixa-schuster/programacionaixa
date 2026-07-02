import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  productosFavoritos: Producto[] = [];

  obtenerProducto(): Producto[] {
    return this.productosFavoritos;
  }

  agregarProducto(producto: Producto): void {

    const existe = this.productosFavoritos.find(
      p => p.id === producto.id
    );

    if (!existe) {

      this.productosFavoritos.push({
        ...producto,
        cantidad: 1
      });

    }

  }

  eliminarProducto(id: number): void {

    this.productosFavoritos =
      this.productosFavoritos.filter(
        p => p.id !== id
      );

  }

}