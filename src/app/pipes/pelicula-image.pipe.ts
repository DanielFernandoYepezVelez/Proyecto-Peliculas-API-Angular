import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImage',
})
export class PeliculaImagePipe implements PipeTransform {
  /* Aqui Me Llega La Pelicula De Cartelera Desde HTML Con Su Respectiva Posición */
  transform(pelicula: any): any {
    const URL = 'https://image.tmdb.org/t/p/w500';

    if (pelicula.backdrop_path) {
      return URL + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return URL + pelicula.poster_path;
      } else {
        return './assets/img/no-image-icon-23.jpg';
      }
    }
  }
}
