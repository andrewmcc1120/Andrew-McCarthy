import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '../../services';
import { IContactFormValue, IPostEmailRequest } from '../../interfaces';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactFormGroup: FormGroup;
  nameControl: FormControl;
  emailAddressControl: FormControl;
  messageControl: FormControl;
  honeyPotControl: FormControl;
  subjectFormControl: FormControl;

  readonly contactFormSubject = 'Email From Contact Form';

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.createReactiveForm();
  }

  isControlInvalid(controlToCheck: FormControl): boolean {
    return (!controlToCheck.pristine || controlToCheck.touched) && controlToCheck.invalid;
  }

  formIsInvalid(): boolean {
    return this.contactFormGroup.invalid;
  }

  sendEmail(contactFormValue: IContactFormValue): void {
    const postEmailObject = this.mapPostEmailObject(contactFormValue);
    console.log(postEmailObject);
    this.emailService.postEmail(postEmailObject).subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      });
  }

  private createReactiveForm(): void {
    this.nameControl = new FormControl(null, Validators.required);
    this.emailAddressControl = new FormControl(null, [Validators.required, Validators.email]);
    this.messageControl = new FormControl(null, Validators.required);
    this.honeyPotControl = new FormControl('');
    this.subjectFormControl = new FormControl(this.contactFormSubject);
    this.contactFormGroup = new FormGroup({
      name: this.nameControl,
      emailAddress: this.emailAddressControl,
      message: this.messageControl,
      honeyPot: this.honeyPotControl,
      subject: this.subjectFormControl
    });
  }

  private mapPostEmailObject(contactFormValue: IContactFormValue): IPostEmailRequest {
    return {
      name: contactFormValue.name,
      _replyto: contactFormValue.emailAddress,
      message: contactFormValue.message,
      _honeypot: contactFormValue.honeyPot,
      _subject: contactFormValue.subject
    };
  }
}
