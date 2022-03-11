import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sendMailForm!: FormGroup;
  isShown: boolean = true;
  isShownError: boolean = false;
  isShownSuccess: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.sendMailForm = this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      subject: [],
      content: []
    })
  }

  sendMail(){

    // const firstName = this.sendMailForm.get("firstName")?.value;
    // const lastName = this.sendMailForm.get("lastName")?.value;
    // const subject = this.sendMailForm.get("subject")?.value;
    // const email = this.sendMailForm.get("email")?.value;
    // const content = this.sendMailForm.get("content")?.value;

    this.isShownError ? this.isShownError = false : "";
    this.isShownSuccess ? this.isShownSuccess = false : "";

    let nbErrors: number = 0;
    Object.keys(this.sendMailForm.controls).forEach(key => {
      if(!this.sendMailForm.controls[key].value){
        // this.sendMailForm.controls[key].markAsUntouched();
        nbErrors += 1;
      }
    });

    if(nbErrors > 0){
      this.isShownError = !this.isShownError;
    }else{
      this.isShown = ! this.isShown
      this.isShownSuccess = ! this.isShownSuccess;
    }
  }
}
