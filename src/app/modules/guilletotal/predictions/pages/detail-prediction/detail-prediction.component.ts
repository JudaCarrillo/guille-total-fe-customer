import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-prediction',
  templateUrl: './detail-prediction.component.html',
  styleUrls: ['./detail-prediction.component.scss'],
})
export class DetailPredictionComponent implements OnInit {
  gameId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtén el parámetro 'id' de la URL
    this.gameId = this.route.snapshot.paramMap.get('id');
    console.log('Game ID:', this.gameId); // Solo para verificar que funciona
    // Aquí puedes cargar los detalles del juego usando 'gameId'
  }
}
