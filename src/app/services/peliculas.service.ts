import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey  = '3ce51f4f4d903e5ff3f19b8db4dd1de6';
  private urlMoviedb  = 'https://api.themoviedb.org/3/';
  peliculas: any [] = [];

  constructor(private http: HttpClient) { }

    getCartelera() {
      const desde = new Date();
      const hasta = new Date();
      hasta.setDate(hasta.getDate() + 7);

      const desdeStr = [desde.getFullYear(), desde.getMonth() + 1 < 10 ? (desde.getMonth() + 1).toString().padStart(2, '0') : desde.getMonth() + 1, desde.getDate() < 10 ? (desde.getDate()).toString().padStart(2, '0') : desde.getDate()].join('-');
      const hastaStr = [hasta.getFullYear(), hasta.getMonth() + 1 < 10 ? (hasta.getMonth() + 1).toString().padStart(2, '0') : hasta.getMonth() + 1, hasta.getDate() < 10 ? (hasta.getDate()).toString().padStart(2, '0') : desde.getDate()].join('-');

      const url = `${ this.urlMoviedb }discover/movie?primary_release_date.gte=${hastaStr}&primary_release_date.lte=${desdeStr}&api_key=${this.apikey}&language=es`;
      return this.http.get( url )
                      .pipe(map( (res: any) => res.results));
    }

  getPopularesKids() {
      const url = `${ this.urlMoviedb }discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
      return this.http.get( url )
                      .pipe(map( (res: any) => res.results));
    }

  getPopulares() {
    const url = `${ this.urlMoviedb }discover/movie?with_genres=18&primary_release_year=2020&api_key=${this.apikey}&language=es`;
    return this.http.get( url )
                    .pipe(map( (res: any) => res.results));
    }

  buscarpelicula(texto: string) {
    const url = `${ this.urlMoviedb }search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url )
                    .pipe(map( (res: any) => {
                     this.peliculas = res.results;
                     console.log(this.peliculas);
                     return res.results; }));
    }

    getPelicula(id: string) {
      const url = `${ this.urlMoviedb }movie/${id}?api_key=${this.apikey}&language=es`;
      return this.http.get( url )
                      .pipe(map( (res: any) => res));
    }

   }

