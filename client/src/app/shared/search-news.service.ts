import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchNewsService {

  private search = new BehaviorSubject('');
  sharedSearch = this.search.asObservable();

  constructor() { }

  nextSearch(search: string) {
    this.search.next(search)
  }

}
