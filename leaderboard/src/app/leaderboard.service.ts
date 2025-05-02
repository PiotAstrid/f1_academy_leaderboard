import { Injectable } from '@angular/core';
import { LeaderboardEntry } from './leaderboard-entry';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  // list of sample leaderboard entries
  private leaderboardEntryList: LeaderboardEntry[] = [
    {name: 'Max Verstappen', color: '#f57842', time: '1:07.719'},
    {name: 'Alex Albon', color: '#0328fc', time: '1:06.758'}

  ]
  
  private entriesSubject = new BehaviorSubject<LeaderboardEntry[]>(this.leaderboardEntryList);
  
  constructor() { }

  getAllLeaderBoardEntries(): Observable<LeaderboardEntry[]>{
    // TODO return sorted list
    return this.entriesSubject.asObservable();
  }

  // add a new entry to the leaderboard
  addEntry(name: string, color: string, time: string){
    if (name && time){
      if (!color) color = '#000000';
      this.leaderboardEntryList = [...this.leaderboardEntryList, { name, color, time }];
      this.entriesSubject.next(this.leaderboardEntryList);
    }
  }

}
