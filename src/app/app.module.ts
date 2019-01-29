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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogSingleComponent } from './blog-single/blog-single.component';
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule,
         MatBadgeModule,
         MatButtonModule,
         MatButtonToggleModule,
         MatCheckboxModule,
         MatIconModule,
         MatInputModule,
         MatProgressSpinnerModule,
         MatRadioModule,
         MatRippleModule,
         MatFormFieldControl,
         MatTooltipModule,
         MatOptionModule,
         MatTableModule,
         MatFormFieldModule,
    } from '@angular/material';*/


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
    AppRoutingModule,
    ReactiveFormsModule,
   /* BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatOptionModule,
    MatCheckboxModule,
    MatCheckboxModule,*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
