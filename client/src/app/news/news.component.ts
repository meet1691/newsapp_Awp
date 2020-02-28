import { Component } from '@angular/core';

import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})

export class NewsComponent {

  constructor(private svcNews: NewsService) { }
}
