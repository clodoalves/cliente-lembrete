/*Classe que representa o primeiro componente carregado
na aplicacao*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CRUD de lembretes com o Angular';
}
