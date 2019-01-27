import { Component, OnInit,Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css']
})
export class BannerSliderComponent implements OnInit {

   public data_content_slider:any;
  constructor( private http: HttpClient ) { }
   
  getBlog_slide() {
      this.http.get('http://localhost/blog/api/get_post.php',{responseType:"json"})
      .subscribe(
        response => {
            this.data_content_slider = response;
            console.log("data :"+response);
            var sample=JSON.stringify(response);
       });
  }

  ngOnInit() {
      this.getBlog_slide();
  }

}
