import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.scss']
})
export class PercentageBarComponent {
  @Input() team1Percentage: number = 0;
  @Input() drawPercentage: number = 0;
  @Input() team2Percentage: number = 0;
  @Input() team1Goals: number = 0;  // Goles de team1
  @Input() team2Goals: number = 0;  // Goles de team2
}
