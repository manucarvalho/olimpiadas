import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaisComponent } from './pais/pais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipeComponent } from './equipe/equipe.component';
import { SportComponent } from './sport/sport.component';
import { AtletaComponent } from './atleta/atleta.component';
import { ProvaComponent } from './prova/prova.component';
import { PaisConsultaComponent } from './pais-consulta/pais-consulta.component';
import { SportConsultaComponent } from './sport-consulta/sport-consulta.component';
import { ProvaConsultaComponent } from './prova-consulta/prova-consulta.component';
import { AtletaConsultaComponent } from './atleta-consulta/atleta-consulta.component';
import { EquipeConsultaComponent } from './equipe-consulta/equipe-consulta.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaisComponent,
    EquipeComponent,
    SportComponent,
    AtletaComponent,
    ProvaComponent,
    PaisConsultaComponent,
    SportConsultaComponent,
    ProvaConsultaComponent,
    AtletaConsultaComponent,
    EquipeConsultaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
