import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { NewsService, News } from '../../shared/news.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit {

  private news: News

  constructor(svcNews: NewsService, route: ActivatedRoute) {
    let id = route.snapshot.paramMap.get('id');
    this.news = svcNews.getNews(Number(id));
  }

  ngOnInit() {

  }
}
