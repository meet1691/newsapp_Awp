import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { NewsService, News } from '../../../shared/news.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
})

export class AddFormComponent implements OnInit {

  private addForm: FormGroup;

  constructor(private svcNews: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    this.addForm = new FormGroup({
      date: new FormControl(''),
      type: new FormControl(''),
      title: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ])),
      text: new FormControl('Text example'),
      image: new FormControl(''),
    })
  }

  addNews(news: News) {
    news.id = this.svcNews.getNews(this.svcNews.getNewsList().length - 1).id + 1;
    this.svcNews.add(news);

    this.router.navigate(['/news'])
  }

}
