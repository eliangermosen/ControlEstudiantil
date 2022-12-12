import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    InicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
