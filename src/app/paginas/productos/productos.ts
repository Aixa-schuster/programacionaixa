import { Component } from '@angular/core';


interface Producto {

  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;

}

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})

export class Productos {

  productos: Producto[] = [

    {
      id: 1,
      nombre: 'Esculpidas',
      descripcion: 'Este servicio brinda amoldamiento con refuerzo de uñas en polygel',
      imagen: 'assets/imagen15.jpg'
    },

    {
      id: 2,
      nombre: 'Soft Gel',
      descripcion: 'Este servicio está diseñado únicamente para alargamientos con tips',
      imagen: 'assets/imagen13.jpg'
    },

    {
      id: 3,
      nombre: 'Kapping',
      descripcion: 'Este servicio se basa en el refuerzo y amoldamiento con gel',
      imagen: 'assets/imagen14.jpg'
    },

    {
      id: 4,
      nombre: 'Semi esmaltado',
      descripcion: 'Este servicio brinda únicamente esmaltado semi permanente',
      imagen: 'assets/imagen12.jpg'
    },

    {
      id: 5,
      nombre: 'Acrílico',
      descripcion: 'Este servicio se basa en el refuerzo y alargamiento de uñas',
      imagen: 'assets/imagen11.jpg'
    },

    {
      id: 6,
      nombre: 'Manicura rusa',
      descripcion: 'Este servicio se basa en la limpieza y formación de la uña',
      imagen: 'assets/imagen10.jpg'
    }

  ];

}