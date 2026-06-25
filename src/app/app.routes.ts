import { Routes } from '@angular/router';
import { Contacto } from './paginas/contacto/contacto';
import { Inicio } from './paginas/inicio/inicio';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Productos } from './paginas/productos/productos';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Carrito } from './compartidos/carrito/carrito';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';
export const routes: Routes = [

{ path: '', redirectTo: 'inicio', pathMatch: 'full' },

{ path: 'contacto', component: Contacto },

{ path: 'inicio',  component: Inicio },

{ path: 'ofertas', component:Ofertas },

{ path: 'productos', component:Productos },

{ path: '**', redirectTo: 'inicio' },

{ path: '', redirectTo: 'inicio', pathMatch: 'full' },

{ path: 'carrito', component: Carrito },

{ path: 'favoritos',  component: Favoritos },

{ path: 'iniciosesion',  component: InicioSesion },

{ path: 'registro',  component: Registro },

{ path: '**', redirectTo: 'inicio' },

];
