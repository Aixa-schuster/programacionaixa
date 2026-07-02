import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FavoritosService } from '../../servicios/favoritos';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class Favoritos implements OnInit {

  productosFavoritos: Producto[] = [];

  constructor(
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {

    this.productosFavoritos =
      this.favoritosService.obtenerProducto();

  }

  eliminar(id: number): void {

    this.favoritosService.eliminarProducto(id);

    this.productosFavoritos =
      this.favoritosService.obtenerProducto();

  }

}