import { Component, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas:Tarefa[] = [
  {
    descricao:"Ser contratado",
    finalizada: false,
    prioridade: Prioridade.alta
  },
  {
    descricao:"Alimentar a esposa",
    finalizada: false,
    prioridade: Prioridade.alta
  },
  {
    descricao:"Comer bobagem",
    finalizada: false,
    prioridade: Prioridade.baixa
  },
  {
    descricao:"Fazer o trabalho da faculdade",
    finalizada: false,
    prioridade: Prioridade.media
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
