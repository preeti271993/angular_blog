import { Component, OnInit , Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {

 private blogParams: any[];
 public data_content_single: any;
 public data_content_single_comment: any;
 public data_content_single_comment_count : any;
 public data_comment : any;
 // comment form
 commentForm: FormGroup;
 submitted= false;

constructor(private route: ActivatedRoute , private http: HttpClient, public formBuilder: FormBuilder) { }
  
ngOnInit() {

  //form validations

  this.commentForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
            message: [''],
          } );

      this.route.params.subscribe(params => {
      this.blogParams = params['path'];
      });
this.getSingleBlog();

console.log(this.blogParams);
}


 // convenience getter for easy access to form fields
    get f() { 
      return this.commentForm.controls; 
    }

    onSubmit(formVal) {
        var data = {'post_id':this.blogParams,'content':this.commentForm.value.message,'author':this.commentForm.value.firstName};
          this.postComment(data);
           
          //reset form data
          this.commentForm.reset();

        
        // // stop here if form is invalid
        // if (this.commentForm.invalid && this.commentForm.value != null) {

          
        // }

        
    }


// Single content and comment api
getSingleBlog(){
	this.http.get('http://localhost/blog/api/get_post_by_id.php?post_id='+this.blogParams, {responseType:"json"})
	.subscribe(
        (response: any) => {
            this.data_content_single = response.details;
            this.data_content_single_comment = response.comments;
            this.data_content_single_comment_count = response.comments.length;
            console.log("data :"+response);
       });
}

//post comment api
postComment(data){
  this.http.post('http://localhost/blog/api/save_comment.php', data)
  .subscribe(
        (response: any) => {           
            console.log(response);
       });
}

 

}
