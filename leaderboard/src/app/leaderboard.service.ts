import { Injectable } from '@angular/core';
import { LeaderboardEntry } from './leaderboard-entry';
import { BehaviorSubject, Observable } from 'rxjs';
import { getCountryCode } from 'countries-list';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  // list of sample leaderboard entries
  private leaderboardEntryList: LeaderboardEntry[] = [
    {name: 'Nicole Havrda', color: '#0b244d', time: '1:00.456', countryCode: 'CA'},
    {name: 'Nina Gademan', color: '#e876dd', time: '1:06.758', countryCode: 'NL'},
    {name: 'Emma Felbermayr', color: '#03fc6f', time: '1:07.719', countryCode: 'AT'},
    {name: 'Courtney Crone', color: '#f00a38', time: '1:09.758', countryCode: 'US'},
    {name: 'Aiva Anagnostiadis', color: '#fff5f7', time: '1:12.758', countryCode: 'AU'},
    {name: 'Alba Larsen', color: '#26030a', time: '1:13.725', countryCode: 'DK'},
    {name: 'Chloe Chambers', color: '#322085', time: '1:13.738', countryCode: 'US'},
    {name: 'Rafaela Ferreira', color: '#8290e0', time: '1:15.758', countryCode: 'BR'},
    {name: 'Ella Lloyd', color: '#f06d0a', time: '1:20.758', countryCode: 'GB'},
    {name: 'Alisha Palmowski', color: '#010721', time: '1:23.719', countryCode: 'GB'},
    {name: 'Aurelia Nobels', color: '#edb8af', time: '1:25.758', countryCode: 'BR'},
    {name: 'Joanne Coconte', color: '#ff2185', time: '1:27.758', countryCode: 'AU'},
    {name: 'Chloe Chong', color: '#f5e8df', time: '1:35.758', countryCode: 'GB'},
    {name: 'Doriane Pin', color: '#000000', time: '1:37.758', countryCode: 'FR'},
    {name: 'Lia Block', color: '#050729', time: '1:38.785', countryCode: 'US'},
    {name: 'Maya Weug', color: '#9c0000', time: '1:39.738', countryCode: 'NL'},
    {name: 'Tina Hausmann', color: '#083b28', time: '2:06.758', countryCode: 'CH'},
    {name: 'Ava Dobson', color: '#081f3b', time: '2:20.758', countryCode: 'US'}

  ]
  
  private entriesSubject = new BehaviorSubject<LeaderboardEntry[]>(this.leaderboardEntryList);
  
  constructor() { }

  getAllLeaderBoardEntries(): Observable<LeaderboardEntry[]>{
    return this.entriesSubject.asObservable();
  }

  // add a new entry to the leaderboard
  addEntry(name: string, color: string, time: string, countryCode: string){
    const country = getCountryCode(countryCode);
    if (name && time && country){
      // the default color is black
      if (!color) color = '#000000';
      
      this.leaderboardEntryList = [...this.leaderboardEntryList, { name: name, color: color, time: time, countryCode: country}];
      
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
