import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from 'app/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
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

  //estados primitivos dos campos (pristine)
  public enderecoEstadoPimitivo: boolean = true
  public numeroEstadoPimitivo: boolean = true
  public complementoEstadoPimitivo: boolean = true
  public formaPagamentoEstadoPimitivo: boolean = true

  //Controlar botão confirmar compra
  public formEstado: string = 'disabled'



  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    //this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    this.enderecoEstadoPimitivo = false

    //Se a String for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    this.habilitaForm()
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero

    this.numeroEstadoPimitivo = false
    //Se a String for maior que 1
    if (this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento

    this.complementoEstadoPimitivo = false
    //Se a String for maior que 1
    if (this.complemento.length > 1) {
      this.complementoValido = true
    } else {
      this.complementoValido = false
    }
    this.habilitaForm()
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    this.formaPagamentoEstadoPimitivo = false

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
    this.habilitaForm()
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }
}
