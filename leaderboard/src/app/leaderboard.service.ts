import { Injectable } from '@angular/core';
import { LeaderboardEntry } from './leaderboard-entry';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  // list of sample leaderboard entries
  private leaderboardEntryList: LeaderboardEntry[] = [
    {name: 'Emma Felbermayr', color: '#03fc6f', time: '1:07.719'},
    {name: 'Nina Gademan', color: '#e876dd', time: '1:06.758'}

  ]
  
  private entriesSubject = new BehaviorSubject<LeaderboardEntry[]>(this.leaderboardEntryList);
  
  constructor() { }

  getAllLeaderBoardEntries(): Observable<LeaderboardEntry[]>{
    return this.entriesSubject.asObservable();
  }

  // add a new entry to the leaderboard
  addEntry(name: string, color: string, time: string){
    if (name && time){
      // the default color is black
      if (!color) color = '#000000';
      this.leaderboardEntryList = [...this.leaderboardEntryList, { name, color, time }];
      
      // sort list by time
      const sorted = [...this.leaderboardEntryList].sort((a, b) =>
        this.timeToMilliseconds(a.time) - this.timeToMilliseconds(b.time)
      );
      
      this.entriesSubject.next(sorted);
    }
  }

  private timeToMilliseconds(time: string): number {
    // pattern: m:ss:mmm or 1:23:456
    const match = time.match(/^(\d+):(\d{2})\.(\d{3})$/) 
    // if time is invalid, return infinity
    if (!match) return Infinity; 

    const minutes = parseInt(match[1], 10);
    const seconds = parseInt(match[2], 10);
    const milliseconds = parseInt(match[3], 10);

    return minutes * 60000 + seconds * 1000 + milliseconds;

  }

}
