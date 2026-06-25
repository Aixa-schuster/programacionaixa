import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Fouter } from './compartidos/fouter/fouter';
import { Nav } from './compartidos/nav/nav';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Fouter, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto');
}
