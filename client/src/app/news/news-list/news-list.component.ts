import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';
import { SearchNewsService } from 'src/app/shared/search-news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  private isAdmin: boolean;
  private search: string;

  private maxNewsQty = this.svcNews.getNewsList().length
  private currentNewsQty: number;
  private difference: number;

  constructor(private svcNews: NewsService, private svcSearch: SearchNewsService) { }

  ngOnInit(): void {
    this.difference = 5;
    this.currentNewsQty = this.difference;
    this.isAdmin = true;

    this.svcSearch.sharedSearch.subscribe(search => this.search = search);
  }

  private loadMore() {
    if (this.currentNewsQty + this.difference < this.maxNewsQty) {
      this.currentNewsQty += this.difference;
    } else if (this.currentNewsQty < this.maxNewsQty) {
      this.currentNewsQty = this.maxNewsQty
    }
  }
}
