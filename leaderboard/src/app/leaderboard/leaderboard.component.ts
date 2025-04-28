import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardService } from '../leaderboard.service';
import { LeaderboardEntry } from '../leaderboard-entry';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  entries$: Observable<LeaderboardEntry[]>;

  constructor(private leaderboardService: LeaderboardService){
    this.entries$ = this.leaderboardService.getAllLeaderBoardEntries();
  }


}
