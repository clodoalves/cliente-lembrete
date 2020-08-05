import { Component, OnInit } from '@angular/core';

/*Componente responsavel pela exibicao de mensagens
de erro para o usuario*/

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  public error: string;
  constructor() { }

  ngOnInit(): void {
  }

  setError(error: string, tempo: number = 5000)
  {
    this.error = error;

    setTimeout(() =>
    {
      this.error = null;
    }, tempo);
  }
}
