import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Lembrete} from '../../interfaces/lembrete';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})

/*Classe do componente form-lembrete, responsavel pela entrada
e saida de dados do componente. Estes dados tem como origem e 
destino o componente pai que estiver instanciando o componente 
de formulario de Cadastro ou Alteracao de Lembrete*/
export class FormLembreteComponent  {

 @Input() lembrete: Lembrete = {} as Lembrete;
 @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter();

 onSubmit()
 {
    this.outputLembrete.emit(this.lembrete);
 }
}
