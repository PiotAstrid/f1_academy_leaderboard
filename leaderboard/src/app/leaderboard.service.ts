import { Injectable } from '@angular/core';
import { LeaderboardEntry } from './leaderboard-entry';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor() { }

  leaderboardEntryList: LeaderboardEntry[] = [
    {name: 'Max Verstappen', color: '#f57842', time: '1:07.719'}
  ]

  getAllLeaderBoardEntries(){
    // TODO return sorted list
    return this.leaderboardEntryList;
  }

  addEntry(name: string, color: string, time: string){
    this.leaderboardEntryList.push({name, color, time})
  }

}
