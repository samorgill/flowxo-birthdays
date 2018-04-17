import { Component, OnInit } from '@angular/core';
import {BirthdayService} from '../service/birthday.service';
import {Birthday} from '../service/birthday-model';

@Component({
  selector: 'app-todays-birthdays',
  templateUrl: './todays-birthdays.component.html',
  styleUrls: ['./todays-birthdays.component.scss']
})
export class TodaysBirthdaysComponent implements OnInit {

  birthdays: Birthday[];
  date = Date.now();

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit() {
    this.birthdays = this.birthdayService.getTodaysBirthdays();
  }





}
