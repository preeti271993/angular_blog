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

constructor(private route: ActivatedRoute , private http: HttpClient) { }
  
ngOnInit() {

this.route.params.subscribe(params => {
this.blogParams = params['path'];
});
this.getSingleBlog();
console.log(this.blogParams);
}

getSingleBlog(){
	this.http.get('http://localhost/blog/api/get_post_by_id.php', {responseType:"json"})
	.subscribe(Response => {
		this.data_content_single = Response;
		console.log("data :"+Response);
	})
}

}
