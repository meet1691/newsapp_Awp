import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchNewsService } from 'src/app/shared/search-news.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  private search: string;
  private searchForm: FormGroup;
  @Output() newsSource = new EventEmitter<string>();

  constructor(private svcSearch: SearchNewsService,
    private formBuilder: FormBuilder,
  ) {
    this.initForm();
    
  }

  ngOnInit(): void {
    this.svcSearch.sharedSearch.subscribe(search => this.search = search);
    this.newsSource.emit('Local')
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
    console.log(newsSource);
    this.newsSource.emit(newsSource)
  }
}
