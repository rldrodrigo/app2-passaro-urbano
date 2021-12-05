import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //controle de validação dos campos 
  public enderecoValido: boolean = true
  public numeroValido: boolean = true
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    //Se a String for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    //Se a String for maior que 1
    if (this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    //Se a String for maior que 1
    if (this.complemento.length > 1) {
      this.complementoValido = true
    } else {
      this.complementoValido = false
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    if (
      this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
  }
}
