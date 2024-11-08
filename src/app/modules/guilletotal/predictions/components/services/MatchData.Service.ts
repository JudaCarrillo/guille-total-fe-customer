import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Match } from '../../interfaces/match.interface';  // Importa la interfaz de Match

@Injectable({
  providedIn: 'root',
})
export class MatchDataService {
  private countriesData: any[] = [];
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  // Cargar los datos de los países y almacenarlos localmente
  loadCountriesData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((data) => {
        this.countriesData = data;
      }),
      catchError((error) => {
        return of([]); // Retorna un arreglo vacío en caso de error
      })
    );
  }

  // Obtener la bandera de un país dado su nombre
  getCountryFlag(countryName: string): string {
    const country = this.countriesData.find(
      (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
    );
    return country ? country.flags.png : '../../../../../../assets/vacio.png'; // Retorna la bandera si se encuentra, sino la por defecto
  }

  // Método para obtener los próximos partidos (máximo 5 partidos)
  getUpcomingMatches(id: string): Observable<Match[]> {
    const upcomingMatches: Match[] = [
      { team1: 'Argentina', team2: 'Brazil', date: '2024-11-10', time: '18:00' },
      { team1: 'Peru', team2: 'Chile', date: '2024-11-12', time: '20:00' },
      { team1: 'Argentina', team2: 'Peru', date: '2024-11-15', time: '16:00' },
      { team1: 'Argentina', team2: 'Peru', date: '2024-11-16', time: '14:00' },
      { team1: 'Argentina', team2: 'Brazil', date: '2024-11-20', time: '18:30' },
      { team1: 'Chile', team2: 'Bolivia', date: '2024-11-22', time: '17:00' },
    ];

    // Convertir los nombres de los equipos a mayúsculas
    upcomingMatches.forEach(match => {
      match.team1 = match.team1.toUpperCase();
      match.team2 = match.team2.toUpperCase();
    });

    // Limitar los próximos encuentros a un máximo de 5
    return of(upcomingMatches.slice(0, 5));
  }

  // Método para simular datos del partido (máximo 5 partidos)
  getMatchData(id: string): Observable<any> {
    const mockData = {
      predictions: {
        team1: { name: 'Argentina', percentage: 75 },
        team2: { name: 'Peru', percentage: 15 },
        history: ['W', 'L', 'W', 'D', 'W'],
        drawPercentage: 10,
        chartData: {
          dates: ['2024-11-01', '2024-11-02', '2024-11-03'],
          argentina: [0.7, 0.75, 0.78],
          peru: [0.2, 0.15, 0.1],
        },
      },
      recentMatches: [
        { title: 'Argentina vs Peru', date: '2024-11-01', result: 'Win' },
        { title: 'Argentina vs Brazil', date: '2024-10-25', result: 'Draw' },
        { title: 'Peru vs Chile', date: '2024-10-20', result: 'Lose' },
        { title: 'Chile vs Bolivia', date: '2024-10-18', result: 'Win' },
        { title: 'Argentina vs Bolivia', date: '2024-10-15', result: 'Win' },
        { title: 'Brazil vs Peru', date: '2024-10-10', result: 'Draw' },
      ],
      upcomingMatches: [
        { team1: 'Argentina', team2: 'Brazil', date: '2024-11-10', time: '18:00' },
        { team1: 'Peru', team2: 'Chile', date: '2024-11-12', time: '20:00' },
        { team1: 'Argentina', team2: 'Peru', date: '2024-11-15', time: '16:00' },
        { team1: 'Argentina', team2: 'Peru', date: '2024-11-16', time: '14:00' },
        { team1: 'Argentina', team2: 'Brazil', date: '2024-11-20', time: '18:30' },
        { team1: 'Chile', team2: 'Bolivia', date: '2024-11-22', time: '17:00' },
      ],
      matchDetails: {
        dt: 'Ricardo Gareca',
        team1: 'Argentina',
        team2: 'Peru',
        date: '2024-11-10',
        time: '18:00',
        stadium: 'Monumental',
        city: 'Lima',
        country: 'Perú',
        elevation: 1100,
        condition: 'Home',
        event: 'Mundial',
        rival: 'Argentina',
      },
    };

    // Convertir los nombres de los equipos a mayúsculas
    mockData.upcomingMatches.forEach(match => {
      match.team1 = match.team1.toUpperCase();
      match.team2 = match.team2.toUpperCase();
    });

    // Limitar los próximos encuentros a un máximo de 5
    mockData.upcomingMatches = mockData.upcomingMatches.slice(0, 5);

    // Limitar los partidos recientes a un máximo de 5
    mockData.recentMatches = mockData.recentMatches.slice(0, 5);

    return of(mockData);
  }
}
