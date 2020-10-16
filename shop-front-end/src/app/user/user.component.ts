// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: FormGroup;
  errorForm: string;
  passwordErrorMatch: string;
  newUser: User;

  constructor(formBuilder: FormBuilder, private userService: UserService, private router: Router) {
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
      this.newUser = this.form.value;

      this.userService.createUser('http://127.0.0.1:8000/api/user', {
        'name': this.newUser.name,
        'lastname': this.newUser.lastname,
        'email': this.newUser.email,
        'phone': this.newUser.phone,
        'password': this.newUser.password,
        'passwordConfirm': this.newUser.passwordConfirm,
        'address': this.newUser.address,
        'address2': this.newUser.address2,
        'city': this.newUser.city,
        'state': this.newUser.state,
        'created_at': "2015-03-12 12:12:34",
        'updated_at': "2015-03-12 12:12:34"
      }).subscribe((data: any) => {
        
        this.router.navigate(['/home']);
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
