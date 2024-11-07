// match-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {
  constructor() {}

  getMatchData(id: string): Observable<any> {
    const mockData = {
      predictions: {
        team1: { name: 'Team A', logo: 'path/to/team-a-logo.png', percentage: 60 },
        team2: { name: 'Team B', logo: 'path/to/team-b-logo.png', percentage: 30 },
        drawPercentage: 10,
        chartData: {
          dates: ['2024-11-01', '2024-11-02', '2024-11-03'],
          'team a': [0.6, 0.5, 0.7],
          'team b': [0.4, 0.5, 0.3]
        }
      },
      recentMatches: [
        { title: 'Team A vs Team B', date: '2024-10-10', result: '1-2' },
        { title: 'Team B vs Team A', date: '2024-09-10', result: '0-3' }
      ],
      upcomingMatches: [
        { team: 'Chile', date: '2024-11-15', time: '8:30 p.m.' },
        { team: 'Argentina', date: '2024-11-19', time: '7:00 p.m.' }
      ]
    };
    return of(mockData);
  }
}
