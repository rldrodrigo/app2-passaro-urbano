import { Pedido } from "./shared/pedido.model"
import { Http } from "@angular/http"
import { Injectable } from "@angular/core"

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http) {

    }

    public efetivarCompra(pedido: Pedido): void {
        console.log(pedido)
    }
}