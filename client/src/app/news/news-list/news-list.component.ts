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
  private increseQty: number;

  constructor(private svcNews: NewsService,
    private svcSearch: SearchNewsService
  ) {
    this.increseQty = 5;
    this.currentNewsQty = this.increseQty;
    this.isAdmin = true;
  }

  ngOnInit(): void {
    this.svcSearch.sharedSearch.subscribe(search => this.search = search);
  }

  private loadMore() {
    if (this.currentNewsQty + this.increseQty < this.maxNewsQty) {
      this.currentNewsQty += this.increseQty;
    } else if (this.currentNewsQty < this.maxNewsQty) {
      this.currentNewsQty = this.maxNewsQty
    }
  }
}
