// predictions.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { MatchDataService } from '../services/MatchData.Service';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {
  @Input() gameId!: string;
  matchData: any;
  chartOptions!: ApexOptions;

  constructor(private matchDataService: MatchDataService) {}

  ngOnInit() {
    this.matchDataService.getMatchData(this.gameId).subscribe(data => {
      this.matchData = data.predictions;
      this.initializeChart(data.predictions.chartData, data.predictions.team1.name, data.predictions.team2.name);
    });
  }

  initializeChart(chartData: any, team1Name: string, team2Name: string) {
    this.chartOptions = {
      chart: {
        type: 'line',
        height: 350
      },
      series: [
        {
          name: team1Name,
          data: chartData[team1Name.toLowerCase()] // Asegúrate que el objeto chartData tenga claves correspondientes a los nombres de los equipos
        },
        {
          name: team2Name,
          data: chartData[team2Name.toLowerCase()] // Convertimos a minúsculas en caso de que las claves estén en ese formato
        }
      ],
      xaxis: {
        categories: chartData.dates
      }
    };
  }
}
