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
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  entries$: Observable<LeaderboardEntry[]>;

  constructor(private leaderboardService: LeaderboardService){
    this.entries$ = this.leaderboardService.getAllLeaderBoardEntries();
  }

  getTextColorClass(color: string): string {
    return this.isColorDark(color) ? 'text-white' : 'text-black';
  }
  
  private isColorDark(color: string): boolean {
    // convert to rgb
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5; // true if dark, false if light
  }

}
