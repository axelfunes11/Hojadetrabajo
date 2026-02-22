import { AfterViewInit, Component, DoCheck, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './componentes/componente';
import { ComponenteDos } from './componentes/componente-dos/componente-dos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AddComponent,
    ComponenteDos,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements AfterViewInit {
 ngAfterViewInit(): void {
   console.log("vista componentes y vistas de las hijas");
 }
}




