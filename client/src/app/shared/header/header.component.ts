import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private newsSource: string;
  constructor() { }

  private receiveNewsSource($event: string) {
    this.newsSource = $event;
  }

}
