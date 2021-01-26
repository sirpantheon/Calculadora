import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services'

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  constructor(private CalculadoraService: CalculadoraService) { 
    
  }

  ngOnInit(): void {
  }

}
