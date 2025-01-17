import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './component'
import { CalculadoraService } from './services'



@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
