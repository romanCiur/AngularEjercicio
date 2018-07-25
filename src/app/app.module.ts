import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { DudasComponent } from './dudas/dudas.component';
import { HomeComponent } from './home/home.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RecomendacionesComponent,
    DudasComponent,
    HomeComponent,
    TutorialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
