import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  cartelera: any;
  masVotadas: any;
  popularesKids: any;

  constructor(private peliculasService: PeliculasService) {
    this.peliculasService
      .getCartelera()
      .subscribe((res) => (this.cartelera = res));

    this.peliculasService
      .mejorPromedio()
      .subscribe((res) => (this.masVotadas = res));

    this.peliculasService
      .getPopularesKids()
      .subscribe((res) => (this.popularesKids = res));
  }

  ngOnInit(): void {}
}
