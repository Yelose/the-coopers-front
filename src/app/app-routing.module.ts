import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './views/estadisticas/estadisticas.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { JuegoComponent } from './views/juego/juego.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
