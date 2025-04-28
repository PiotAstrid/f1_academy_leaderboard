import { Component } from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-entryform',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './entryform.component.html',
  styleUrl: './entryform.component.scss'
})
export class EntryformComponent {
  // constructor(private formBuilder: FormBuilder){}
  testForm(){
    console.log('testiing!')
  }
}
