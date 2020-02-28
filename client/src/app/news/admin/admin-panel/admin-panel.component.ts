import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SearchNewsService } from 'src/app/shared/search-news.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
})
export class AdminPanelComponent implements OnInit {

  private search: string;
  private searchForm: FormGroup;
  @Output() newsSource = new EventEmitter<string>();

  constructor(private svcSearch: SearchNewsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.newsSource.emit('Local')
    this.svcSearch.sharedSearch.subscribe(search => this.search = search);
  }

  submitSearch(value: { title: string; }) {
    this.svcSearch.nextSearch(value.title)
  }

  initForm() {
    this.searchForm = this.formBuilder.group({
      title: ''
    })
  }

  changeNewsSource(newsSource: string): void {
    this.newsSource.emit(newsSource)
  }
}
