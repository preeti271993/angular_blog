import { Component, OnInit , Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
    public data_comment : any;
    private blogParams: any[];
    public register_data : any;

     registerForm: FormGroup;
     submitted= false;


  constructor(private route: ActivatedRoute , private http: HttpClient, public formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.createForm();

  }
  
 createForm() {
  this.registerForm = this.formBuilder.group({
     name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

    onSubmit(formVal) {
        var register_data = this.registerForm.value;
          this.register(register_data);
           
          //reset form data
          this.registerForm.reset();

        
        // // stop here if form is invalid
        // if (this.commentForm.invalid && this.commentForm.value != null) {

          
        // }

        
    }

  //registration api
register(register_data){
  this.http.post('http://localhost/blog/api/user_register.php', register_data)
  .subscribe(
        (response: any) => {           
            console.log(response);
       });
}

}
