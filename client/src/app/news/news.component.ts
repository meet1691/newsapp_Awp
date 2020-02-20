import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  constructor(private svcNews: NewsService) {
  }

  ngOnInit() {
  }
}
