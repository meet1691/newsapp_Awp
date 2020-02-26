import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private newsSource: string;
  constructor() {

  }

  ngOnInit(): void {
  }

  private receiveNewsSource($event: string) {
    this.newsSource = $event;
  }

}
