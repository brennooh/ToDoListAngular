import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { ListaDeTarefasComponent } from './components/lista-de-tarefas/lista-de-tarefas.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    ListaDeTarefasComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
