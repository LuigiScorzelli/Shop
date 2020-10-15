import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(user: string, password: string) {
    if(user !== '' && password !== '') {
      this.authService.login(user, password);
      this.router.navigate(['/home']);
    }

    if(user == 'admin' && password == 'abc') {
      this.authService.login(user, password);
      this.router.navigate(['/admin']);
    }
  }
}
