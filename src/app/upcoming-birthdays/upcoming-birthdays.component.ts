import {Component, OnInit} from '@angular/core';
import {BirthdayService} from '../service/birthday.service';
import {Birthday} from '../service/birthday-model';

@Component({
  selector: 'app-upcoming-birthdays',
  templateUrl: './upcoming-birthdays.component.html',
  styleUrls: ['./upcoming-birthdays.component.scss']
})
export class UpcomingBirthdaysComponent implements OnInit {

  birthdays: Birthday[];

  constructor(private birthdayService: BirthdayService) {
  }

  ngOnInit() {
    this.birthdays = this.birthdayService.getUpcomingBirthdays();
   }
}
