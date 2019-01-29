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
   public data_content_img: any;

  constructor( private http: HttpClient ) { }
   
  getBlog_slide() {

      
      this.http.get('http://localhost/blog/api/get_post.php',{responseType:"json"})
      .subscribe(
        (response: any) => {
            this.data_content_slider = response;
          //  this.data_content_img = ;
            var sample=JSON.stringify(response);
       });
  }

  ngOnInit() {
      this.getBlog_slide();
  }

}
