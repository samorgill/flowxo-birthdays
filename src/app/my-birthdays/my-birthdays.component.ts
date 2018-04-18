import { Component, OnInit } from '@angular/core';
import {BirthdayService} from '../service/birthday.service';
import {Birthday} from '../service/birthday-model';

@Component({
  selector: 'app-my-birthdays',
  templateUrl: './my-birthdays.component.html',
  styleUrls: ['./my-birthdays.component.scss']
})
export class MyBirthdaysComponent implements OnInit {

  birthdays: Birthday[];

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit() {
    this.birthdays = this.birthdayService.getMyBirthdays();
  }

  removeBirthday(birthday){
    this.birthdayService.removeBirthday(birthday);
  }

}
