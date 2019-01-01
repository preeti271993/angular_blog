import { Injectable } from '@angular/core';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpModule, JsonpModule } from '@angular/http';

@Injectable({
    providedIn : 'root',
})

export class ContentListBlogService {
   

  constructor(private http: HttpClient) {

  }
     getContent_blog() : Observable<any>{
     	alert()

  	return this.http.get('http://localhost/blog/get_post.php')
  	.map(resp => {
      console.log(resp)
    });
  }
  

}
