import { Component, OnInit, ViewChild } from '@angular/core';
import {Lembrete} from '../../interfaces/lembrete';
import {LembreteService} from '../../services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/compartilhados/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})

/*Classe do componente da pagina de listagem de lembretes*/
export class ListaLembreteComponent implements OnInit {

  public lembretes: Lembrete[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private lembreteService: LembreteService) { }

  ngOnInit
  (): void 
  {
    this.getListaLembretes();
  }

  getListaLembretes(){
    this.lembreteService.getListaLembretes().subscribe
    ((lembretes: Lembrete[]) =>
    {
        this.lembretes = lembretes;
    }, () => {this.errorMsgComponent.setError('Falha ao buscar lembretes.'); } );
  }

  deletaLembrete(id: number)
  {
    this.lembreteService.deletaLembrate(id).subscribe(() =>
    {
       this.getListaLembretes();

    }, () => {this.errorMsgComponent.setError('Erro ao deletar'); });
  }

  existemLembretes(): boolean
  {
    return this.lembretes && this.lembretes.length > 0;
  }
}
