import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';
import { Observable, Subject } from 'rxjs';

import 'app/util/rxjs-extensions'

import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .debounceTime(1000)//quantidade de tempo que ele aguarda para executar ejm milisegundos
      .distinctUntilChanged() //para fazer pesquisas distintas
      .switchMap((termo: string) => {
        if (termo.trim() === '') {
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }
        return this.ofertaService.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        return of<Oferta[]>([])
      })

  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }
}
