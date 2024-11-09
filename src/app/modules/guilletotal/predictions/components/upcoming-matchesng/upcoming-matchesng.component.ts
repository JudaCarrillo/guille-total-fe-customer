import { Component, Input, OnInit } from '@angular/core';
import { MatchDataService } from '../services/MatchData.Service';
import { Match } from '../../interfaces/match.interface';  // Asegúrate de importar la interfaz Match

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matchesng.component.html',
  styleUrls: ['./upcoming-matchesng.component.scss']
})
export class UpcomingMatchesComponent implements OnInit {
  @Input() gameId: string | null = null;
  upcomingMatches: Match[] = []; // Aquí estamos usando el tipo Match[]

  constructor(private matchDataService: MatchDataService) {}

  ngOnInit() {
    if (this.gameId) {
      // Solo procedemos si gameId es válido
      this.matchDataService.getUpcomingMatches(this.gameId).subscribe(
        data => {
          if (data && data.length > 0) {
            this.upcomingMatches = data.map(match => {
              return {
                ...match,
                team1Flag: this.matchDataService.getCountryFlag(match.team1),
                team2Flag: this.matchDataService.getCountryFlag(match.team2)
              };
            });
          } else {
            console.error('No upcoming matches data found.');
          }
        },
        error => {
          console.error('Error fetching match data:', error);
        }
      );
    } else {
      console.error('Game ID is null or invalid.');
    }
  }
  getCountryFlag(countryName: string): string {
    return this.matchDataService.getCountryFlag(countryName);
  }
}
