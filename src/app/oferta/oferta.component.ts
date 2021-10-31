import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from 'app/ofertas.service';
import { Oferta } from 'app/shared/oferta.model';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertaService) { }

  ngOnInit() {
    console.log()
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })
    /*
  this.route.params.subscribe(
    (parametro: any) => { console.log(parametro) },
    (erro: any) => console.log(erro),
    () => console.log('Processamento classificado como concluído')
  )*/

    /*
      let tempo = Observable.interval(2000)
  
      tempo.subscribe((intervalo: number) => {
        console.log(intervalo)
      })
  
    */


    //Observable (observável)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1)
      observer.next(3)
      observer.complete()
      //observer.error('algum erro foi encontrado na stream de eventos')
      //Após o erro nenhum evento será disparado
    })

    //Observable (observador)
    meuObservableTeste.subscribe(
      (resultado: any) => console.log(resultado), //next
      (erro: string) => console.log(erro), // error
      () => console.log('Stream de eventos concluída') //complete
    )

  }

}
