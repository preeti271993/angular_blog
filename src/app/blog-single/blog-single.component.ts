import { Component, OnInit , Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ContentListBlogService } from '../content-list-blog.service';
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

constructor(private route: ActivatedRoute , private http: HttpClient) { }
  
ngOnInit() {

this.route.params.subscribe(params => {
this.blogParams = params['path'];
});
this.getSingleBlog();
console.log(this.blogParams);
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
            var sample=JSON.stringify(response);
       });
}

}
