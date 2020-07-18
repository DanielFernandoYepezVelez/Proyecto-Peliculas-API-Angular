import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private apikey = '4d142929e92c52183f0266f0cb5e94cc';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  peliculasHtml: any[] = [];

  constructor(private http: HttpClient) {}

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-0${desde.getMonth()}-0${desde.getDay()}`;
    const hastaStr = `${desde.getFullYear()}-0${desde.getMonth()}-0${desde.getDay()}`;

    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}`;

    return this.http.get(url).pipe(
      map(
        (res: any) => {
          // console.log(res);
          return res.results;
        },
        (err) => {
          // console.log(err);
          return err;
        }
      )
    );
  }

  getPopularesKids() {
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}`;

    return this.http.get(url).pipe(
      map(
        (res: any) => {
          // console.log(res);
          return res.results;
        },
        (err) => {
          // console.log(err);
          return err;
        }
      )
    );
  }

  mejorPromedio() {
    const url = `${this.urlMoviedb}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apikey}`;

    return this.http.get(url).pipe(
      map(
        (res: any) => {
          // console.log(res);
          return res.results;
        },
        (err) => {
          // console.log(err);
          return err;
        }
      )
    );
  }

  buscarPelicula(texto: string) {
    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}`;

    return this.http.get(url).pipe(
      map(
        (res: any) => {
          // console.log(res.results);
          this.peliculasHtml = res.results;
          return res.results;
        },
        (err) => {
          // console.log(err);
          return err;
        }
      )
    );
  }
}
