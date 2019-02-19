import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
      {
	   path: '',
	   component: ContentListComponent
	  },
	  {
	   path: 'blog/:path',
	   component: BlogSingleComponent
    },
    {
      path: 'register',
      component: RegisterComponent
     },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ],
  declarations: []
})
export class AppRoutingModule { }
