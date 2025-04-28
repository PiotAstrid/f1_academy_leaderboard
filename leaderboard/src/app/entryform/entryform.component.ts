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
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(
      this.entryForm.value.name + ' | ' + this.entryForm.value.email
    );
  }


  constructor(
    private leaderboardService: LeaderboardService
  ){}
}
