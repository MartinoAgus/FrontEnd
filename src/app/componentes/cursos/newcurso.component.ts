import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-newcurso',
  templateUrl: './newcurso.component.html',
  styleUrls: ['./newcurso.component.css']
})
export class NewcursoComponent implements OnInit {
  nombreC: string;
  descripcionC: string;

  constructor(private cursosService: CursosService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const cursos = new Cursos(this.nombreC, this.descripcionC);
    this.cursosService.save(cursos).subscribe({
      next: data => {
        alert("Curso agregado correctamente");
        this.router.navigate(['/cursos']);
      }, error:error=>{
        alert("Falló");
        this.router.navigate(['/cursos']);
      }
    })
  }

}
