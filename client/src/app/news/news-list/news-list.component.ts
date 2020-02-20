import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  private isAdmin: boolean;

  constructor(private svcNews: NewsService) {
    this.isAdmin = true;
  }

  ngOnInit(): void {
  }

}
