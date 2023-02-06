import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { DetallePreguntaComponent } from './components/detalle-pregunta/detalle-pregunta.component';
import { SeccionIngresoComponent } from './components/secciones/seccion-ingreso/seccion-ingreso.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'editar/:id', component: DetallePreguntaComponent },
  { path: 'seccion-ingreso', component: SeccionIngresoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }