import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NewsService, News } from '../../../shared/news.service'

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
})

export class EditFormComponent implements OnInit {

  private editForm: FormGroup;
  private news: News;

  constructor(private svcNews: NewsService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.news = this.svcNews.getNews(Number(id));
    this.initForm()
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      id: this.news.id,
      date: this.news.date,
      type: this.news.type,
      title: [this.news.title, Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])],
      image: this.news.image,
      text: this.news.text
    })
  }

  editNews(news: News) {
    this.svcNews.edit(news)
    this.router.navigate(['/news'])
  }

}

