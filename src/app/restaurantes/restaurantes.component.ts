import { Component, OnInit } from '@angular/core';
import { Oferta } from 'app/shared/oferta.model';
import { OfertaService } from 'app/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertaService]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertaService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        console.log(ofertas)
      })
  }

}
