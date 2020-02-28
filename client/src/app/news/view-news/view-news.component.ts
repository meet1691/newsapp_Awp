import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService, News } from '../../shared/news.service'

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
})
export class ViewNewsComponent implements OnInit{

  private news: News

  constructor(svcNews: NewsService, route: ActivatedRoute) {
    let id = route.snapshot.paramMap.get('id');
    this.news = svcNews.getNews(Number(id));
  }

  ngOnInit() {
    
  }
}
