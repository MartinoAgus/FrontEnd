import { Component } from '@angular/core';

@Component({
  selector: 'app-solapas',
  templateUrl: './solapas.component.html',
  styleUrls: ['./solapas.component.css']
})
export class SolapasComponent {

  onCambio(): void {
    window.onload = function(){
      document.getElementById('visitado').style.background = 'blue';
    }
  }

}
