import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentListComponent } from './content-list/content-list.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from 'angular-pipes';
import { SlugifyPipe } from 'angular-pipes';
import { RouterModule, Routes , Router, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BlogSingleComponent } from './blog-single/blog-single.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
    FooterComponent,
    ContentListComponent,
    BannerSliderComponent,
    TruncatePipe,
    SlugifyPipe,
    BlogSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
