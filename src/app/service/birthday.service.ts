import {Injectable} from '@angular/core';
import {Birthday} from './birthday-model';
import {BIRTHDAYS} from './birthdays-list';
import {DatePipe} from '@angular/common'

@Injectable()
export class BirthdayService {

  todaysBirthdays: Birthday[] = [];
  upcomingBirthdays: Birthday[] = [];
  date: Date;

  constructor(public datepipe: DatePipe) {
  }

  getBirthdays(): Birthday[] {
    return BIRTHDAYS;
  }

  getTodaysBirthdays(): Birthday[] {

    BIRTHDAYS.forEach((birthday) => {

      this.date = new Date()
      let latest_date = this.datepipe.transform(this.date, 'MM-dd');
      let bb = this.datepipe.transform(birthday.birthday, 'MM-dd');

      if (bb === latest_date) {
        this.todaysBirthdays.push(birthday);
      }
    });
    return this.todaysBirthdays;
  }

  getUpcomingBirthdays(): Birthday[] {

    BIRTHDAYS.forEach((birthday) => {

      let now = new Date()
      now.setHours(0);
      now.setMinutes(0);
      now.setSeconds(0);
      now.setMilliseconds(0);

      let twoWeeks = new Date(new Date().setDate(now.getDate() + 14));

      let bday = new Date(birthday.birthday)
      bday.setFullYear(now.getFullYear());

      if(bday >= now && bday <= twoWeeks){
        this.upcomingBirthdays.push(birthday);
      }
    });

    return this.upcomingBirthdays;
  }

}
