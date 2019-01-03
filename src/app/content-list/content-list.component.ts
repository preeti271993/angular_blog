import { Component, OnInit,Injectable } from '@angular/core';
//import { ContentListBlogService } from '../content-list-blog.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { TruncatePipe } from 'angular-pipes';
import { SlugifyPipe } from 'angular-pipes';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
  //providers: [ContentListBlogService]
})
export class ContentListComponent implements OnInit {
  
  public data_content:any;
  constructor( private http: HttpClient ) { }
   
  getBlog() {
      this.http.get('http://localhost/blog/get_post.php',{responseType:"json"})
      .subscribe(
        response => {
            this.data_content = response;
            console.log("data :"+response);
            var sample=JSON.stringify(response);
       });
  }

  ngOnInit() {
      this.getBlog();
  }

}
