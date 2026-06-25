import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FavoritosService } from '../../servicios/favoritos';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class Favoritos implements OnInit {

  productosFavoritos: Producto[] = [];

  constructor(
    private favoritosService: FavoritosService
  ) {}

  ngOnInit() {
    this.productosFavoritos =
      this.favoritosService.obtenerProducto();
  }

  total() {
  }
  aumentar(id: number) {
    this.favoritosService.aumentarProducto(id);
  }

  disminuir(id: number) {
    this.favoritosService.disminuirProducto(id);
  }

  eliminar(id: number) {
    this.favoritosService.eliminarProducto(id);

    this.productosFavoritos =
    this.favoritosService.obtenerProducto();
  }
}