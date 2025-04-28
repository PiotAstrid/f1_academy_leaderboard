import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { EntryformComponent } from './entryform/entryform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LeaderboardComponent,
    EntryformComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'leaderboard';
}
