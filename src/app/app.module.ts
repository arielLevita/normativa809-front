import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { DetallePreguntaComponent } from './components/detalle-pregunta/detalle-pregunta.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    DetallePreguntaComponent,
    MessagesComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
