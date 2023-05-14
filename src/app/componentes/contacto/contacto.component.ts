import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      mensaje:['', [Validators.required]],
    })
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get Apellido(){
    return this.form.get('apellido');
  }

  get Email(){
    return this.form.get('email');
  }

  get Mensaje(){
    return this.form.get('mensaje');
  }

}
