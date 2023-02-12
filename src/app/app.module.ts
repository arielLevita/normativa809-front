import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { DetallePreguntaComponent } from './components/detalle-pregunta/detalle-pregunta.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { SeccionIngresoComponent } from './components/secciones/seccion-ingreso/seccion-ingreso.component';
import { AddPregreButtonComponent } from './components/add-pregre-button/add-pregre-button.component';


@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    DetallePreguntaComponent,
    MessagesComponent,
    SidebarComponent,
    MainComponent,
    SeccionIngresoComponent,
    AddPregreButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
