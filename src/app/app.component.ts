import { Component , ngOnit } from '@angular/core';
import { RouterModule, Routes , Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ngOnit{
  title = 'app';

  constructor(public router: Router){}
}
