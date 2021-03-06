import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTService } from 'src/app/services/auth-t.service';

@Component({
  selector: 'app-login-page-t',
  templateUrl: './login-page-t.component.html',
  styleUrls: ['./login-page-t.component.css'],
})
export class LoginPageTComponent implements OnInit {
  @ViewChild('fT', { static: false }) loginFormT: NgForm;

  constructor(private authTService: AuthTService, private router: Router) {}

  ngOnInit(): void {}

  handleLoginClick(): void {
    this.authTService.loginT('', '');
    this.router.navigate(['pets']);
  }
  handleSubmitT(): void {
    if (this.loginFormT.form.status == 'VALID') {
      if (
        this.authTService.loginT(
          this.loginFormT.value.email,
          this.loginFormT.value.password
        )
      ) {
        this.router.navigate(['dashboard', '123']);
        this.loginFormT.reset();
      }
    }

    //   console.log(this.loginFormT);
    //   console.log(this.loginFormT.value);
  }
}
