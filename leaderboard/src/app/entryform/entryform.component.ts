import { Component,  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeaderboardService } from '../leaderboard.service';
import { LeaderboardEntry } from '../leaderboard-entry';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-entryform',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './entryform.component.html',
  styleUrl: './entryform.component.css'
})
export class EntryformComponent {
  entryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    time: new FormControl('', [Validators.required, Validators.pattern(/^\d+:\d{2}\.\d{3}$/)]), // 1:23.456
    color: new FormControl('#000000', Validators.required),
  });

  handleSubmit() {
    if (this.entryForm.invalid) {
      this.entryForm.markAllAsTouched();
      return;
    }
    
    // non-null assertion operator tells the compiler that name, color and time will never be null
    this.leaderboardService.addEntry(
      this.entryForm.value.name!, 
      this.entryForm.value.color!, 
      this.entryForm.value.time!
    );
    this.entryForm.reset();
  }

  get name() {
    return this.entryForm.get('name');
  }

  get color() {
    return this.entryForm.get('color');
  }

  get time() {
    return this.entryForm.get('time');
  }

  constructor(private leaderboardService: LeaderboardService){}
}
