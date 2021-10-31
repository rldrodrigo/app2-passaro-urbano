import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca)

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro status', erro.status),
    )
  }
}
