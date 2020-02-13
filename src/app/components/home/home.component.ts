import { Component, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  @Input() cartelera: any [] = [];
           populareskids: any [] = [];

  constructor(public Pelis: PeliculasService) {
    this.Pelis.getPopulares().subscribe(( data: any) => {
          console.log(data);
          this.cartelera = data;
        });

    this.Pelis.getPopularesKids().subscribe(( data: any) => {
          console.log(data);
          this.populareskids = data;
        });
  }

}
