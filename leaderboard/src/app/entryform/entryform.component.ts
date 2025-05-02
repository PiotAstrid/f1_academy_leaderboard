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
  formattedTime='';

  entryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    time: new FormControl('', [Validators.required, Validators.pattern(/^\d+:\d{2}\.\d{3}$/)]), // 1:23.456
    color: new FormControl('#000000'),
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

  onTimeInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    // keep only digits
    const digits = input.replace(/\D/g, '');

    // format: m:ss.mmm
    let formatted = ''

    // separate minutes, seconds and milliseconds
    const minutes = digits.slice(0, 1);
    const seconds = digits.slice(1, 3);
    const millisecond = digits.slice(3, 6);
    
    formatted = minutes;

    // add : and . in correct spot during typing
    if (seconds) {
      formatted += `:${seconds}`
    }
    if (millisecond) {
      formatted += `.${millisecond}`
    }

    this.formattedTime = formatted;
    this.entryForm.get('time')?.setValue(formatted, { emitEvent: false })
  }

  constructor(private leaderboardService: LeaderboardService){}
}
