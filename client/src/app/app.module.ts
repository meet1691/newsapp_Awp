import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { NewsFilterPipe } from './shared/news-filter.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './shared/main/main.component';
import { NewsComponent } from './news/news.component';
import { EditFormComponent } from './news/admin/edit-form/edit-form.component';
import { AddFormComponent } from './news/admin/add-form/add-form.component';
import { ViewNewsComponent } from './news/view-news/view-news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { AdminPanelComponent } from './news/admin/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NewsComponent,
    NewsFilterPipe,
    EditFormComponent,
    AddFormComponent,
    ViewNewsComponent,
    NewsListComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
