import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  //variaveis escenciais para operação
  static readonly SOMA:string = '+';
  static readonly SUBTRACAO:string = '-';
  static readonly DIVISAO:string = '/';
  static readonly MULTIPLICACAO:string = '*';

  constructor() { }

  //metodo para executar calculos das quatro operações 
  calcular (num1:number,num2:number,operacao:string):number{

    let resultado:number;//variavel auxiliar para armazenar o "resultado"

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
