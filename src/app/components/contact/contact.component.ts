import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  email = 'atulbpatil004@gmail.com';

  isMessageSent = false;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('Form Data Submitted:', this.formData);
    if (this.formData.email != undefined && this.formData.email != null) {
      this.isMessageSent = true;

      setTimeout(() => {
        this.isMessageSent = false;
      }, 5000);
    }
    this.formData = { name: '', email: '', message: '' };
  }
}
