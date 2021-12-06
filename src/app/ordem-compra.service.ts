
import { Http, RequestOptions, Headers, Response } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { URL_API } from "./app.api"

import { Pedido } from "./shared/pedido.model"

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http) {

    }

    public efetivarCompra(pedido: Pedido): Observable<any> {

        let headers: Headers = new Headers()

        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers })
        )

            .map((resposta: Response) => console.log(resposta.json()))
    }
}