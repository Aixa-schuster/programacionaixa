import { Component, OnInit } from "@angular/core";
import { Producto } from "../../models/producto";
import { CarritoService } from "../../servicios/carrito";

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito implements OnInit {
    productosCarrito: Producto[] = [];
    constructor(
        private carritoService: CarritoService
    ) { }
    ngOnInit() {
        this.productosCarrito =
            this.carritoService.obtenerProductos();
    }
    total(){
    }
    aumentar(id: number) {
        this.carritoService.aumentarProducto(id);
    }
    disminuir(id: number) {
        this.carritoService.restarProducto(id);
    }
    eliminar(id: number) {
        this.carritoService.eliminarProducto(id);
        this.productosCarrito =
            this.carritoService.obtenerProductos();
    }
}