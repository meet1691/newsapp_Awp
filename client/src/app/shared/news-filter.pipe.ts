import { Pipe, PipeTransform } from '@angular/core';
import { News } from './news.service'

@Pipe({
  name: 'newsFilter'
})

export class NewsFilterPipe implements PipeTransform {

  transform(news: News[], search: string): News[] {
    if (!search.trim()) {
      return news;
    }
    return news.filter(news => {
      return news.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
    });
  }
}
