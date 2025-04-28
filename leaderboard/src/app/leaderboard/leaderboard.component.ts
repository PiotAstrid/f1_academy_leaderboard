import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardService } from '../leaderboard.service';
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
  entries: LeaderboardEntry[] = [];

  constructor(private leaderboardService: LeaderboardService){}

  getLeaderboardEntries() : void {
    this.entries = this.leaderboardService.getAllLeaderBoardEntries();
  }

  ngOnInit(): void {
    this.getLeaderboardEntries();
  }

}
