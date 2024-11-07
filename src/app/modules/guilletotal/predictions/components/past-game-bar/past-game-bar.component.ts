import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-past-game-bar',
  templateUrl: './past-game-bar.component.html',
  styleUrls: ['./past-game-bar.component.scss']
})
export class PastGameBarComponent {
  @Input() team1Goals: number = 0; // Goles de team1
  @Input() team2Goals: number = 0; // Goles de team2
  @Input() drawPercentage: number = 0;
  @Input() team1Percentage: number = 0; // Para mantener la proporción de la barra
  @Input() team2Percentage: number = 0; // Para mantener la proporción de la barra
}
