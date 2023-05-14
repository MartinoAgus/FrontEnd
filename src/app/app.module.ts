import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SolapasComponent } from './componentes/solapas/solapas.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NewcursoComponent } from './componentes/cursos/newcurso.component';
import { EditcursoComponent } from './componentes/cursos/editcurso.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SolapasComponent,
    SobreMiComponent,
    CursosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    NewcursoComponent,
    EditcursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }