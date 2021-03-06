import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertaService) { }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas()

    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => {
        //console.log('a função resolve() foi resolvida depois de 3 segundos ')
        this.ofertas = ofertas
      })
      .catch((param: any) => console.log(param))

  }

}
