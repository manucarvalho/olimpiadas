import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletaConsultaComponent } from './atleta-consulta/atleta-consulta.component';
import { AtletaComponent } from './atleta/atleta.component';
import { EquipeConsultaComponent } from './equipe-consulta/equipe-consulta.component';
import { EquipeComponent } from './equipe/equipe.component';
import { PaisConsultaComponent } from './pais-consulta/pais-consulta.component';
import { PaisComponent } from './pais/pais.component';
import { ProvaConsultaComponent } from './prova-consulta/prova-consulta.component';
import { ProvaComponent } from './prova/prova.component';
import { SportConsultaComponent } from './sport-consulta/sport-consulta.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  {path: 'pais', component: PaisComponent},
  {path: 'equipe', component: EquipeComponent},
  {path: 'sport', component: SportComponent},
  {path: 'atleta', component: AtletaComponent},
  {path: 'prova', component: ProvaComponent},
  {path: 'consultapais', component: PaisConsultaComponent},
  {path: 'consultasport', component: SportConsultaComponent},
  {path: 'consultaprova', component: ProvaConsultaComponent},
  {path: 'consultaatleta', component: AtletaConsultaComponent},
  {path: 'consultaequipe', component: EquipeConsultaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
