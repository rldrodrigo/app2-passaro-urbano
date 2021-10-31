import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'app/ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaBusca: string): void {
    console.log(termoDaBusca)
  }
}
