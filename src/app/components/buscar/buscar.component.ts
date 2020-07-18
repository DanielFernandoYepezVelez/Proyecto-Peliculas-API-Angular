import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  buscar = '';

  constructor(
    public peliculasService: PeliculasService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params);

      if (params.texto) {
        this.buscar = params.texto;
        this.buscarPelicula();
      }
    });
  }

  ngOnInit(): void {}

  buscarPelicula() {
    if (this.buscar.length <= 0) {
      return;
    }

    this.peliculasService.buscarPelicula(this.buscar).subscribe();
  }
}
