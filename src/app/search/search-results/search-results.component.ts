import {Component, Input, OnInit} from '@angular/core';
import {BirthdayService} from '../../service/birthday.service';
import {Birthday} from '../../service/birthday-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input() birthdays: Birthday[];

  constructor(private birthdayService: BirthdayService) {
  }

  addBirthday(birthday) {
    this.birthdayService.addBirthday(birthday);
  }

}
