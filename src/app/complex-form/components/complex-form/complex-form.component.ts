import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith, tap} from "rxjs";

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent implements OnInit {

  mainForm!:FormGroup;
  personalInfoForm!:FormGroup;
  contactPreferenceCtrl!:FormControl;
  emailCtrl!:FormControl;
  confirmEmailCtrl!:FormControl;
  emailForm!:FormGroup;
  phoneCtrl!:FormControl;
  passwordCtrl!:FormControl;
  confirmPasswordCtrl!:FormControl;
  loginInfoForm!:FormGroup;

  showEmailCtrl$!:Observable<boolean>;
  showPhoneCtrl$!:Observable<boolean>;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
    this.initFormObservables();
  }

  initMainForm():void{
    this.mainForm = this.fb.group({
      personalInfo:this.personalInfoForm,
      contactPreference:this.contactPreferenceCtrl,
      email:this.emailForm,
      phone:this.phoneCtrl,
      loginInfo:this.loginInfoForm
    });
  }

  private initFormControls():void{
    this.personalInfoForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required]
    })

    this.contactPreferenceCtrl = this.fb.control('email');
    this.emailCtrl = this.fb.control('');
    this.confirmEmailCtrl = this.fb.control('');
    this.phoneCtrl = this.fb.control('');

    this.emailForm = this.fb.group({
      email:this.emailCtrl,
      confirm:this.confirmEmailCtrl
    })

    this.passwordCtrl = this.fb.control('',Validators.required);
    this.confirmPasswordCtrl = this.fb.control('', Validators.required);

    this.loginInfoForm = this.fb.group({
      username:['',Validators.required],
      password:this.passwordCtrl,
      confirmPassword:this.confirmPasswordCtrl
    })
  }

  onSubmitForm() {
    console.log(this.mainForm.value)
  }

  private initFormObservables(){
    this.showEmailCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map(preference => preference == 'email'),
      tap(showPhoneCtrl =>{
        if (showPhoneCtrl){
          this.emailCtrl.addValidators([Validators.required,Validators.email])
          this.confirmEmailCtrl.addValidators([Validators.required,Validators.email])
        }else {
          this.emailCtrl.clearValidators();
          this.confirmEmailCtrl.clearValidators();
        }
        this.emailCtrl.updateValueAndValidity();
        this.confirmEmailCtrl.updateValueAndValidity();
      })
    )

    this.showPhoneCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map(preference => preference == 'phone'),
      tap(showPhoneCtrl =>{
        if (showPhoneCtrl){
          this.phoneCtrl.addValidators([Validators.required,Validators.minLength(10),Validators.maxLength(10)])
        }else {
          this.phoneCtrl.clearValidators();
        }
        this.phoneCtrl.updateValueAndValidity();
      })
    )
  }

}
