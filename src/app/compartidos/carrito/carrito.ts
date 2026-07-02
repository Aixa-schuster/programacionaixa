import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito implements OnInit {

  productosCarrito: Producto[] = [];

  constructor(
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {

    this.productosCarrito =
      this.carritoService.obtenerProductos();

  }

  total(): number {

    return this.productosCarrito.reduce(

      (total, producto) => total + (producto.precio * producto.cantidad),

      0

    );

  }

  aumentar(id: number): void {

    this.carritoService.aumentarProducto(id);

  }

  disminuir(id: number): void {

    this.carritoService.restarProducto(id);

  }

  eliminar(id: number): void {

    this.carritoService.eliminarProducto(id);

    this.productosCarrito =
      this.carritoService.obtenerProductos();

  }

}