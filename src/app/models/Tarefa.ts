//import * as uniqid from 'uniqid';
export interface Tarefa {
    descricao: string;
    finalizada: boolean;
    prioridade: Prioridade;
    //id:string;
}

export enum Prioridade {
    alta = 3,
    media = 2,
    baixa = 1
  }