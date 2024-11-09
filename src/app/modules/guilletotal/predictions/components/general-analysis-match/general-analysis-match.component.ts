import { Component, Input, OnInit } from '@angular/core';
import { MatchDataService } from '../services/MatchData.Service';

@Component({
  selector: 'app-general-analysis-match',
  templateUrl: './general-analysis-match.component.html',
  styleUrls: ['./general-analysis-match.component.scss']
})
export class GeneralAnalysisMatchComponent implements OnInit {
  @Input() gameId: string | null = null;
  matchDetails: any = {};

  constructor(private matchDataService: MatchDataService) {}

  ngOnInit() {
    if (this.gameId) {
      // Solo continuar si el gameId es válido
      this.matchDataService.getMatchData(this.gameId).subscribe(
        data => {
          if (data && data.matchDetails) {
            this.matchDetails = data.matchDetails;
          }
        },
        error => {
          console.error('Error al obtener datos del partido:', error);
        }
      );
    } else {
      console.error('Game ID es nulo o inválido.');
    }
  }
}
