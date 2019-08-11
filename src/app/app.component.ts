import { Component } from '@angular/core';
import * as d3 from 'd3';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Winter Olympics';
  public showCarousel = false;


constructor(router:Router) {
  router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
          this.showCarousel = event.url !== "/";
      }
    });
}
}