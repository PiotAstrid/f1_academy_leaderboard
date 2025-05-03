import { Component, HostListener } from '@angular/core';
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
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leaderboard';

  showScrollTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
