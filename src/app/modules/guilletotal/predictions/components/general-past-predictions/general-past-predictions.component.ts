import { Component, Input, OnInit } from '@angular/core';
import { MatchDataService } from '../services/MatchData.Service';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-general-past-predictions',
  templateUrl: './general-past-predictions.component.html',
  styleUrl: './general-past-predictions.component.scss'
})
export class GeneralPastPredictionsComponent {
  @Input() gameId: string | null = null;
  matchData: any;
  team1Flag: string = '';
  team2Flag: string = '';
  chartOptions!: ApexOptions;

  team1Percentage: number = 0;
  team2Percentage: number = 0;
  drawPercentage: number = 0;
  teamName: string = '';

  constructor(private matchDataService: MatchDataService) {}

  ngOnInit(): void {
    this.matchDataService.loadCountriesData().subscribe(() => {
      this.loadMatchData();
    });
  }

  ngOnChanges(): void {
    if (this.gameId) {
      this.loadMatchData();
    }
  }

  loadMatchData(): void {
    if (this.gameId) {
      this.matchDataService.getMatchData(this.gameId).subscribe({
        next: (data) => {
          this.matchData = data.predictions;
          if (this.matchData) {
            const team1Name = this.matchData.team1.name;
            const team2Name = this.matchData.team2.name;
            this.team1Flag = this.matchDataService.getCountryFlag(team1Name);
            this.team2Flag = this.matchDataService.getCountryFlag(team2Name);
            this.team1Percentage = this.matchData.team1.percentage;
            this.team2Percentage = this.matchData.team2.percentage;
            this.drawPercentage = this.matchData.drawPercentage;
            this.initializeChart(data.predictions.chartData, team1Name, team2Name);
          } else {
            console.error('No prediction data found');
          }
        },
        error: (err) => {
          console.error('Error fetching match data:', err);
        }
      });
    } else {
      console.error('Game ID is null or invalid');
    }
  }


  showTeamName(team: string): void {
    this.teamName = team;
  }

  hideTeamName(): void {
    this.teamName = '';
  }

  initializeChart(chartData: any, team1Name: string, team2Name: string): void {
    if (chartData && chartData.dates) {
      this.chartOptions = {
        chart: {
          type: 'line',
          height: 240,
          toolbar: {
            show: false
          },
          background: '#333333'
        },
        series: [
          {
            name: team1Name,
            data: chartData[team1Name.toLowerCase()] || [],
            color: '#b1e5e5'
          },
          {
            name: team2Name,
            data: chartData[team2Name.toLowerCase()] || [],
            color: '#d0c7ff'
          }
        ],
        xaxis: {
          categories: chartData.dates || [],
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: {
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        grid: {
          show: false
        },
        legend: {
          show: true,
          position: 'right',
          horizontalAlign: 'center',

          offsetY: 10,
          labels: {
            colors: '#ffffff'
          }
        },
        stroke: {
          width: 4,
          curve: 'smooth'
        },
        tooltip: {
          enabled: true,
          theme: 'dark'
        }
      };
    } else {
      console.error('Chart data is missing or malformed');
    }
  }
}
