import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService, News } from '../../shared/news.service'

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
})
export class ViewNewsComponent implements OnInit{

  private news: News

  constructor(private svcNews: NewsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.news = this.svcNews.getNews(Number(id));
  }
}
