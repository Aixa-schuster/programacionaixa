import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {

  usuarioLogueado = false;

  nombre = '';

  constructor(private router: Router){}

  ngOnInit(): void {

    this.cargarSesion();

  }

  cargarSesion(){

    const sesion = localStorage.getItem('sesion');

    if(sesion){

      const usuario = JSON.parse(sesion);

      this.usuarioLogueado = true;

      this.nombre = usuario.nombre;

    }else{

      this.usuarioLogueado = false;

      this.nombre = '';

    }

  }

  cerrarSesion(){

    localStorage.removeItem('sesion');

    this.usuarioLogueado = false;

    this.nombre='';

    this.router.navigate(['/']);

  }

}