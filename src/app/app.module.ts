import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentListComponent } from './content-list/content-list.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { ContentListBlogService } from './content-list-blog.service';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
    FooterComponent,
    ContentListComponent,
    BannerSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ContentListBlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
