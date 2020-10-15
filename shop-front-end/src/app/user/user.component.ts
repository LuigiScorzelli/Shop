import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: FormGroup;
  errorForm: string;
  passwordErrorMatch: string;
  newUser: any;

  constructor(formBuilder: FormBuilder, private userService: HttpClient) {
    this.form = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.required],
      phone: ['', Validators.minLength(3)],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      address: ['', Validators.minLength(3)],
      address2: ['', Validators.minLength(3)],
      city: ['', Validators.minLength(3)],
      state: ['', Validators.minLength(2)],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.form.valid && this.checkPassword(this.form.value.password, this.form.value.passwordConfirm)) {
      
      this.userService.post('http://127.0.0.1:8000/api/user', {
        'name': this.form.value.name,
        'lastname': this.form.value.lastname,
        'email': this.form.value.email,
        'phone': this.form.value.phone,
        'password': this.form.value.password,
        'passwordConfirm': this.form.value.passwordConfirm,
        'address': this.form.value.address,
        'address2': this.form.value.address2,
        'city': this.form.value.city,
        'state': this.form.value.state,
        'created_at': new Date("2015-03-12 12:12:34"),
        'updated_at': new Date("2015-03-12 12:12:34")
      }).subscribe((data: any) => {
        console.log("Post successful", data);
      },(error: any) =>{
        console.log("ERRORE", error);
      });
      return console.log('ok user');

    } else {
      this.errorForm = 'Errore nella compilazione dei dati';
    }
  }
  checkPassword(pas: string, pass1: string) {
    if( pas === pass1) {
      return true;
    } 
    this.passwordErrorMatch = 'Le password non sono uguali';
    return false;
  }
}
