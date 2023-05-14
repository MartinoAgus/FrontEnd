import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-editcurso',
  templateUrl: './editcurso.component.html',
  styleUrls: ['./editcurso.component.css']
})
export class EditcursoComponent implements OnInit {
  cursos: Cursos = null;

  constructor(
    private cursosService: CursosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursosService.details(id).subscribe({
      next: data=>{
        this.cursos = data;
      }, error: error => {
        alert("Error al modificar");
        this.router.navigate(['/cursos'])
      }
  })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursosService.update(id, this.cursos).subscribe({
      next: data=>{
        this.router.navigate(['/cursos']);
      }, error: error=> {
        alert("Error al modificar el curso");
        this.router.navigate(['/cursos']);
      }
  })
  }
}
