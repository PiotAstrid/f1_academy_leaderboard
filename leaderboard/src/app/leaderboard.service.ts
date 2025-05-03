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
    {name: 'Nina Gademan', color: '#e876dd', time: '1:06.758'},
    {name: 'Nicole Havrda', color: '#0b244d', time: '1:11.758'},
    {name: 'Courtney Crone', color: '#f00a38', time: '1:23.758'},
    {name: 'Aiva Anagnostiadis', color: '#fff5f7', time: '1:12.758'},
    {name: 'Alba Larsen', color: '#26030a', time: '1:02.785'},
    {name: 'Chloe Chambers', color: '#322085', time: '4:06.738'},
    {name: 'Rafaela Ferreira', color: '#8290e0', time: '2:06.758'},
    {name: 'Ella Lloyd', color: '#f06d0a', time: '2:20.758'},
    {name: 'Alisha Palmowski', color: '#010721', time: '1:07.719'},
    {name: 'Aurelia Nobels', color: '#edb8af', time: '1:06.758'},
    {name: 'Joanne Coconte', color: '#ff2185', time: '1:11.758'},
    {name: 'Chloe Chong', color: '#f5e8df', time: '1:23.758'},
    {name: 'Doriane Pin', color: '#000000', time: '1:12.758'},
    {name: 'Lia Block', color: '#050729', time: '1:02.785'},
    {name: 'Maya Weug', color: '#9c0000', time: '4:06.738'},
    {name: 'Tina Hausmann', color: '#083b28', time: '2:06.758'},
    {name: 'Ava Dobson', color: '#081f3b', time: '2:20.758'},

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
