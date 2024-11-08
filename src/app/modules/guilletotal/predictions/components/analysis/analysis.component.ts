import { Component, Input, OnInit } from '@angular/core';
import { MatchDataService } from '../services/MatchData.Service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  @Input() gameId: string | null = null;
  recentMatches: any[] = []; // Initialize as empty array

  constructor(private matchDataService: MatchDataService) {}

  ngOnInit() {
    if (this.gameId) {
      // Proceed only if gameId is valid
      this.matchDataService.getMatchData(this.gameId).subscribe(
        data => {
          if (data && data.recentMatches) {
            this.recentMatches = data.recentMatches;
          } else {
            // Handle case where there are no recent matches
            console.error('No recent matches data found.');
          }
        },
        error => {
          // Handle the error case
          console.error('Error fetching match data:', error);
        }
      );
    } else {
      // Handle the case where gameId is null or invalid
      console.error('Game ID is null or invalid.');
    }
  }
}
