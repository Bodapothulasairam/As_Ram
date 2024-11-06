import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule, ReactiveFormsModule, MatFormFieldModule, MatCardModule,
     MatOptionModule, MatDatepickerModule,MatNativeDateModule, MatInputModule, 
     MatCheckboxModule, MatSelectModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  timeZones: string[] = ['UTC', 'PST', 'EST', 'CST', 'MST', 'IST', 'GMT', 'CET'];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      purpose: [''],
      scheduleMeeting: [false],
      meetingDate: [''],
      meetingTime: [''],
      timeZone: ['UTC']
    });

    this.contactForm.get('scheduleMeeting')?.valueChanges.subscribe((isMeetingScheduled) => {
      if (isMeetingScheduled) {
        this.contactForm.get('meetingDate')?.setValidators(Validators.required);
        this.contactForm.get('meetingTime')?.setValidators(Validators.required);
        this.contactForm.get('timeZone')?.setValidators(Validators.required);
      } else {
        this.contactForm.get('meetingDate')?.clearValidators();
        this.contactForm.get('meetingTime')?.clearValidators();
        this.contactForm.get('timeZone')?.clearValidators();
      }
      this.contactForm.get('meetingDate')?.updateValueAndValidity();
      this.contactForm.get('meetingTime')?.updateValueAndValidity();
      this.contactForm.get('timeZone')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      alert("Please fill out the required fields.");
    }
  }
}
