import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LeaderboardService } from '../leaderboard.service';
import { LeaderboardEntry } from '../leaderboard-entry';

@Component({
  selector: 'app-entryform',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './entryform.component.html',
  styleUrl: './entryform.component.scss'
})
export class EntryformComponent {
  entryName = ''
  entryForm = new FormGroup({
    name: new FormControl(''),
    time: new FormControl(''),
    color: new FormControl(''),
  });

  handleSubmit() {
    // non-null assertion operator tells the compiler that name, color and time will never be null
    this.leaderboardService.addEntry(
      this.entryForm.value.name!, 
      this.entryForm.value.color!, 
      this.entryForm.value.time!
    );
    this.entryForm.reset();
  }


  constructor(private leaderboardService: LeaderboardService){}
}
