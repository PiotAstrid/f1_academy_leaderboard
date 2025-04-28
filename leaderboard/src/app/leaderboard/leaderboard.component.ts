import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardEntry } from '../leaderboard-entry';

@Component({
  selector: 'app-leaderboard',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {

  leaderboardEntryList: LeaderboardEntry[] = [
    {id: 0, name: 'Max Verstappen', color: '#f57842', time: '1:07.719'}
  ]

  getAllLeaderBoardEntries(){
    // TODO return sorted list
    return this.leaderboardEntryList;
  }


}
