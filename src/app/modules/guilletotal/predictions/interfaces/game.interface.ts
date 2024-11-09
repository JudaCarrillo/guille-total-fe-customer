// src/app/predictions/game.interface.ts
export interface Game {
  id: string;
  team1: string;
  team2: string;
  team1Flag: string;
  team2Flag: string;
  time: string;
  team1Percentage: number;
  drawPercentage: number;
  team2Percentage: number;
  team1Goals: number;
  team2Goals: number;
}
