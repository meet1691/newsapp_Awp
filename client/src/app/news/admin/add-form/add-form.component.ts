import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService, News } from '../../../shared/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})

export class AddFormComponent implements OnInit {

  private addForm: FormGroup;
  private news: News;

  constructor(private svcNews: NewsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.initForm()
  }

  ngOnInit() {
  }

  private initForm() {
    this.addForm = this.formBuilder.group({
      date: '',
      type: '',
      title: '',
      text: '',
      image: '',
    })
  }

  addNews(news: News) {
    news.id = this.svcNews.getNews(this.svcNews.getNewsList().length - 1).id + 1;
    this.svcNews.add(news);
    this.router.navigate(['/news'])
  }

}
