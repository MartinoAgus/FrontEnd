import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
[x: string]: any;
  cursos: Cursos[] = [];

  constructor(private cursosService: CursosService, private tokenService: TokenService) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarCursos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarCursos(): void{
    this.cursosService.lista().subscribe({
      next: data=>{
        this.cursos = data;
      }
  })
  }

  delete(id?: number) {
    if(id != undefined) {
      this.cursosService.delete(id).subscribe({
        next: data => {
          this.cargarCursos();
        }, error: error => {
          alert("No se pudo eliminar");
        }
    })
    }
  }
}
