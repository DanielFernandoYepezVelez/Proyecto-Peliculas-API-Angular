import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [],
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  regresarA = '';
  busqueda = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      // console.log(params);
      this.regresarA = params.pag;

      if (params.busqueda) {
        this.busqueda = params.busqueda;
      }

      this.peliculasService.getPelicula(params.id).subscribe((resPeli) => {
        this.pelicula = resPeli;
      });
    });
  }

  ngOnInit(): void {}
}
