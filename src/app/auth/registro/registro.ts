import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  nombre = '';
  apellido = '';
  email = '';
  password = '';
  confirmarPassword = '';

  mensaje = '';
  error = '';

  constructor(private router: Router) {}

  registrar() {

    this.mensaje = '';
    this.error = '';

    if (
      this.nombre.trim() === '' ||
      this.apellido.trim() === '' ||
      this.email.trim() === '' ||
      this.password.trim() === '' ||
      this.confirmarPassword.trim() === ''
    ) {
      this.error = 'Complete todos los campos.';
      return;
    }

    if (this.password.length < 6) {
      this.error = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    if (this.password !== this.confirmarPassword) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }

    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.mensaje = '¡Registro exitoso!';

    setTimeout(() => {
      this.router.navigate(['/inicio-sesion']);
    }, 1500);

  }

}