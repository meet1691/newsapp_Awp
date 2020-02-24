import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService, News } from '../../../shared/news.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})

export class EditFormComponent implements OnInit {

  private editForm: FormGroup;
  private news: News;

  constructor(private svcNews: NewsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    this.news = this.svcNews.getNews(Number(id));
    this.initForm()
  }

  ngOnInit() {
    
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      id: this.news.id,
      date: this.news.date,
      type: this.news.type,
      title: this.news.title,
      image: this.news.image,
    })
  }

  editNews(news: News) {
    console.log(news)
    this.svcNews.edit(news)
    this.router.navigate(['/news'])
  }

}

