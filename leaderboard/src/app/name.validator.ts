import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { LeaderboardService } from "./leaderboard.service";

export function nameValidator(leaderboardService: LeaderboardService): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.value;
      const existingEntry = leaderboardService.getEntry(name);
      return existingEntry ? { nameExists: true } : null;
    };
  }