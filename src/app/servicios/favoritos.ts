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

  aumentarProducto(id: number): void {
   
  }

  disminuirProducto(id: number): void {
   
  }

  eliminarProducto(id: number): void {
    this.productosFavoritos = this.productosFavoritos.filter(
      p => p.id !== id
    );
  }
}