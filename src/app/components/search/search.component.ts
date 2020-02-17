import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

buscar = '';

  constructor(public PeliculasSer: PeliculasService, public router: ActivatedRoute) {
    console.log();
    this.router.params.subscribe(parametros => {
      console.log(parametros);
      if (parametros.texto) {
        this.buscar = parametros.texto;
        this.buscarPelicula();
      }
    });
  }



  ngOnInit() {
  }


  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }
    this.PeliculasSer.buscarpelicula(this.buscar).subscribe();
  }

}
