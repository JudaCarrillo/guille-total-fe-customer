import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { AuthService } from '../../../../auth/services/auth.service';
@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {

  upcomingGames: Game[] = [
    {
      id: '1',
      team1: 'Brasil',
      team2: 'Perú',
      team1Flag: '🇧🇷',
      team2Flag: '🇵🇪',
      time: '17:00 PM 12 JULIO',
      team1Percentage: 75,
      drawPercentage: 15,
      team2Percentage: 10,
      team1Goals: 0,
      team2Goals: 0,
    },
    {
      id: '2',
      team1: 'Argentina',
      team2: 'Chile',
      team1Flag: '🇦🇷',
      team2Flag: '🇨🇱',
      time: '20:00 PM 12 JULIO',
      team1Percentage: 60,
      drawPercentage: 25,
      team2Percentage: 15,
      team1Goals: 0,
      team2Goals: 0,
    },
  ];

  pastGames: Game[] = [
    {
      id: '1',
      team1: 'Brasil',
      team2: 'Perú',
      team1Flag: '🇧🇷',
      team2Flag: '🇵🇪',
      time: '17:00 PM 12 JULIO',
      team1Percentage: 70,
      drawPercentage: 20,
      team2Percentage: 10,
      team1Goals: 6,
      team2Goals: 1,
    },
    {
      id: '2',
      team1: 'Argentina',
      team2: 'Chile',
      team1Flag: '🇦🇷',
      team2Flag: '🇨🇱',
      time: '20:00 PM 12 JULIO',
      team1Percentage: 50,
      drawPercentage: 30,
      team2Percentage: 20,
      team1Goals: 3,
      team2Goals: 3,
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Si el usuario no ha iniciado sesión, solo mostramos un partido
    if (!this.authService.isLoggedIn()) {
      this.upcomingGames = [this.upcomingGames[0]]; // Solo el primer partido
      this.pastGames = [this.pastGames[0]]; // Solo el primer partido pasado
    }
  }
}
