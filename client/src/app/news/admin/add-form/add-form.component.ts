import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService, News } from '../../../shared/news.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})

/**
 * @author Artsiom_Bukhautsou
 */
export class AddFormComponent implements OnInit {

  private addForm: FormGroup;

  constructor(private svcNews: NewsService, private formBuilder: FormBuilder) {
    this.initAddForm()
  }

  ngOnInit() {
  }

  /**
   * initAddForm initialize addForm by default values
   */
  private initAddForm() {
    this.addForm = this.formBuilder.group({
      date: '',
      type: '',
      title: '',
      image: '',
    })
  }

  /**
   * Submit value of addForm into View list
   */
  onSubmit() {
    this.svcNews.add(this.addForm.value);
    this.addForm.reset();
    this.initAddForm();
  }

}
