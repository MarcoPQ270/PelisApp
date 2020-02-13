import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {

@Input() peliculas;
@Input() titulo;

  constructor() {

   }

  ngOnInit() {
  }

}
