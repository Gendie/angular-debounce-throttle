import { Component } from '@angular/core';

import { Debounce, Throttle } from 'angular-debounce-throttle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public searchText: string;
  public latestSearchText: string;

  public posX = 0;
  public posY = 0;

  @Debounce(1000)
  public search(value) {
    this.latestSearchText = value;
  }
  
  @Throttle(500)
  public mouseMove(e: MouseEvent) {
    const target = e.target as HTMLDivElement;
    this.posX = e.clientX - target.offsetLeft;
    this.posY = e.clientY - target.offsetTop;
  }
  
}
