import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit, OnDestroy {


  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertaService) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {

      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta
        })
    })


  }

  ngOnDestroy() {

  }

}
