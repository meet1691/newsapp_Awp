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
  showShortDesciption: Map<number, boolean>;


  constructor(private svcNews: NewsService, private svcSearch: SearchNewsService) { }

  ngOnInit(): void {
    this.difference = 5;
    this.currentNewsQty = this.difference;
    this.isAdmin = true;

    this.svcSearch.sharedSearch.subscribe(search => this.search = search);

    this.initMap();
  }

  private loadMore() {
    if (this.currentNewsQty + this.difference < this.maxNewsQty) {
      this.currentNewsQty += this.difference;
    } else if (this.currentNewsQty < this.maxNewsQty) {
      this.currentNewsQty = this.maxNewsQty
    }
  }

  private initMap() {
    this.showShortDesciption = new Map<number, boolean>();
    this.svcNews.getNewsList().forEach(news => {
      this.showShortDesciption.set(news.id, false)
    });
  }

  private alterDescriptionText(id: number) {
    this.showShortDesciption.set(id, !this.showShortDesciption.get(id))
  }

}
