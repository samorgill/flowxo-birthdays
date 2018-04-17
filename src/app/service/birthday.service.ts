import { Injectable } from '@angular/core';
import {Birthday} from './birthday-model';
import {BIRTHDAYS} from './birthdays-list';
import { DatePipe } from '@angular/common'

@Injectable()
export class BirthdayService{

  todaysBirthdays: Birthday[] = [];
  date: Date;

  constructor(public datepipe: DatePipe) { }

  getTodaysBirthdays(): Birthday[]{



    BIRTHDAYS.forEach( (birthday) =>{

      console.log(birthday);
      this.date = new Date()
      let latest_date = this.datepipe.transform(this.date, 'MM-dd');
      let bb = this.datepipe.transform(birthday.birthday, 'MM-dd');

     // birthday.age = 16;
      if(bb === latest_date){
        console.log(' pushing ', birthday);
        this.todaysBirthdays.push(birthday);
      }
    });

    return this.todaysBirthdays;
  }

}
