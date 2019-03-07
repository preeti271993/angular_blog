import { Component, OnInit , Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted= false;
  constructor(private route: ActivatedRoute , private http: HttpClient, public formBuilder: FormBuilder ,  private authenticationService: AuthenticationService,) { }

  ngOnInit() {
  	 this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      password: ['', Validators.required],
    });
  	// reset login status
        this.authenticationService.logout();

  }

  // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  onSubmit() {
        this.submitted = true;

        
    }

}
