import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewcursoComponent } from './componentes/cursos/newcurso.component';
import { EditcursoComponent } from './componentes/cursos/editcurso.component';

const routes: Routes = [
 
  {path:'', component: SobreMiComponent},
  {path:'cursos', component: CursosComponent},
  {path:'habilidades', component: HabilidadesComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevocurso', component: NewcursoComponent},
  {path: 'editcurso/:id', component: EditcursoComponent}
]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
