import {Injectable} from '@angular/core';
import {Birthday} from './birthday-model';
import {BIRTHDAYS} from './birthdays-list';
import {DatePipe} from '@angular/common'

@Injectable()
export class BirthdayService {

  todaysBirthdays: Birthday[] = [];
  upcomingBirthdays: Birthday[] = [];
  myBirthdays: Birthday[] = [];
  searchResults: Birthday[] = [];
  filteredSearch: Birthday[] = [];
  date: Date;

  constructor(public datepipe: DatePipe) {
  }

  getBirthdays(): Birthday[] {
    return BIRTHDAYS;
  }

  addBirthday(birthday) {

    if (!this.todaysBirthdays.includes(birthday)) {
      let isToday = this.isTodayBirthday(birthday);

      if (isToday) {
        this.todaysBirthdays.push(birthday);
      }
    }

    if (!this.upcomingBirthdays.includes(birthday)) {
      let isUpcoming = this.isUpcoming(birthday)
      if (isUpcoming) {
        this.upcomingBirthdays.push(birthday);
      }
    }

    this.myBirthdays.push(birthday);
  }

  removeBirthday(birthday) {

    if (this.todaysBirthdays.includes(birthday)) {
      this.todaysBirthdays.forEach((item, index) => {
        if (item === birthday) this.todaysBirthdays.splice(index, 1);
      });
    }

    if (this.upcomingBirthdays.includes(birthday)) {
      this.upcomingBirthdays.forEach((item, index) => {
        if (item === birthday) this.upcomingBirthdays.splice(index, 1);
      });
    }

    if (this.myBirthdays.includes(birthday)) {
      this.myBirthdays.forEach((item, index) => {
        if (item === birthday) this.myBirthdays.splice(index, 1);
      });
    }
  }

  getTodaysBirthdays(): Birthday[] {

    BIRTHDAYS.forEach((birthday) => {

      birthday.age = this.getAge(birthday);

      let isBdayToday = this.isTodayBirthday(birthday);

      if (isBdayToday) {
        console.log('true');
        this.todaysBirthdays.push(birthday);
      } else {
        console.log('false')
      }
    });

    return this.todaysBirthdays;
  }

  isTodayBirthday(birthday): boolean {
    this.date = new Date();
    let latest_date = this.datepipe.transform(this.date, 'MM-dd');
    let bb = this.datepipe.transform(birthday.birthday, 'MM-dd');

    if (bb === latest_date) {
      return true;
    } else {
      return false;
    }
  }

  getUpcomingBirthdays(): Birthday[] {

    BIRTHDAYS.forEach((birthday) => {

      birthday.timeToNext = this.timeToNext(birthday);

      let isUpcoming = this.isUpcoming(birthday);

      if (isUpcoming) {
        this.upcomingBirthdays.push(birthday);
      }
    });

    return this.upcomingBirthdays;
  }

  isUpcoming(birthday) {
    let now = new Date()
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    let twoWeeks = new Date(new Date().setDate(now.getDate() + 14));

    let bday = new Date(birthday.birthday)
    bday.setFullYear(now.getFullYear());

    if (bday >= now && bday <= twoWeeks) {
      return true;
    }
  }

  getMyBirthdays() {
    return this.myBirthdays;
  }

  getAge(birthday): number {
    let now = new Date()
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);


    let today = now.getFullYear();
    let bday = new Date(birthday.birthday);
    let bdayYear = bday.getFullYear();

    return today - bdayYear;
  }

  timeToNext(birthday): number {
    let now = new Date()
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    let thisMonth = now.getDay();
    let bday = new Date(birthday.birthday);
    let bdayDay = bday.getDay();

    return thisMonth + bdayDay;
  }

  searchBirthdays(name): Birthday[] {
    this.searchResults = [];
    this.filteredSearch = [];

    this.todaysBirthdays.forEach((birthday) => {
      if (birthday.name.includes(name)) {
        this.searchResults.push(birthday);
      }
    });
    this.upcomingBirthdays.forEach((birthday) => {
      if (birthday.name.includes(name)) {
        this.searchResults.push(birthday);
      }
    });
    this.myBirthdays.forEach((birthday) => {
      if (birthday.name.includes(name)) {
        this.searchResults.push(birthday);
      }
    });

    this.filteredSearch = Array.from(new Set(this.searchResults));

    return this.filteredSearch;
  }

}
