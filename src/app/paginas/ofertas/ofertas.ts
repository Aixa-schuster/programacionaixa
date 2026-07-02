import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class Ofertas implements OnInit {

  dias = 0;
  horas = 0;
  minutos = 0;
  segundos = 0;

  ngOnInit(): void {

    const fechaFin = new Date();
    fechaFin.setDate(fechaFin.getDate() + 7);

    setInterval(() => {

      const ahora = new Date().getTime();
      const diferencia = fechaFin.getTime() - ahora;

      this.dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      this.horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      this.minutos = Math.floor((diferencia / 1000 / 60) % 60);
      this.segundos = Math.floor((diferencia / 1000) % 60);

    }, 1000);

  }

}