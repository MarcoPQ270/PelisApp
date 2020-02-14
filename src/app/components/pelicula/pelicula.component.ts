import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;

  constructor(public PeliculasSer: PeliculasService, public router: ActivatedRoute) {
    console.log();
    this.router.params.subscribe(parametros => {
      console.log(parametros);

    });
  }

  ngOnInit() {
  }

}
