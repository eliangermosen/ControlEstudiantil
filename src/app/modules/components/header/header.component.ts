import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hora = new Date().getHours();

  mostrarSaludo(hr:any){
    if(hr < 12) return "Buenos Dias"

    if(hr>12 && hr<18) return "Buenas Tardes"

    return "Buenas Noches"
  }

}
