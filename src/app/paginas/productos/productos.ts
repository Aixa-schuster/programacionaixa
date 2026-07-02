import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carrito';
import { FavoritosService } from '../../servicios/favoritos';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

  constructor(
    private carritoService: CarritoService,
    private favoritosService: FavoritosService
  ) {}

  productos: Producto[] = [

    {
      id: 1,
      nombre: 'Esculpidas',
      descripcion: 'Este servicio brinda amoldamiento con refuerzo de uñas en polygel',
      imagen: 'assets/imagen15.jpg',
      precio: 18000,
      cantidad: 1,
      disponibilidad: true
    },

    {
      id: 2,
      nombre: 'Soft Gel',
      descripcion: 'Este servicio está diseñado únicamente para alargamientos con tips',
      imagen: 'assets/imagen13.jpg',
      precio: 17000,
      cantidad: 1,
      disponibilidad: true
    },

    {
      id: 3,
      nombre: 'Kapping',
      descripcion: 'Este servicio se basa en el refuerzo y amoldamiento con gel',
      imagen: 'assets/imagen14.jpg',
      precio: 16000,
      cantidad: 1,
      disponibilidad: true
    },

    {
      id: 4,
      nombre: 'Semi esmaltado',
      descripcion: 'Este servicio brinda únicamente esmaltado semi permanente',
      imagen: 'assets/imagen12.jpg',
      precio: 12000,
      cantidad: 1,
      disponibilidad: true
    },

    {
      id: 5,
      nombre: 'Acrílico',
      descripcion: 'Este servicio se basa en el refuerzo y alargamiento de uñas',
      imagen: 'assets/imagen11.jpg',
      precio: 20000,
      cantidad: 1,
      disponibilidad: true
    },

    {
      id: 6,
      nombre: 'Manicura rusa',
      descripcion: 'Este servicio se basa en la limpieza y formación de la uña',
      imagen: 'assets/imagen10.jpg',
      precio: 10000,
      cantidad: 1,
      disponibilidad: true
    }

  ];

  agregarCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
  }

  agregarFavorito(producto: Producto): void {
    this.favoritosService.agregarProducto(producto);
  }

}