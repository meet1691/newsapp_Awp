import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewNewsComponent } from './news/view-news/view-news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { EditFormComponent } from './news/admin/edit-form/edit-form.component';
import { AddFormComponent } from './news/admin/add-form/add-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  { path: 'news/edit/:id', component: EditFormComponent },
  { path: 'news/add', component: AddFormComponent },
  { path: 'news/:id', component: ViewNewsComponent },
  { path: '**', redirectTo: '/news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
