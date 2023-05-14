import { Component, OnInit } from '@angular/core';
import { __param } from 'tslib';
import { texto } from 'src/app/model/texto.model'
import { TextoService } from 'src/app/service/texto.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  texto: texto = new texto("");

  constructor(public textoService: TextoService) { }

  ngOnInit(): void {
    this.textoService.getTexto().subscribe({ 
      next: data => {
        this.texto = data
      }
    })
  }
}
