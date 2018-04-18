import { Component, OnInit } from '@angular/core';
import {BirthdayService} from '../service/birthday.service';
import {Birthday} from '../service/birthday-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string;
  birthdays: Birthday[];

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit() {
    // this.birthdayService.getBirthdays().forEach((birthday) =>{
    //   if(birthday.name === this.search){
    //     this.birthdays.push(birthday);
    //     console.log(birthday + ' added');
    //   }
    // });
  }

  onEnter(value: string){
    this.search = value;
    this.birthdays = this.birthdayService.searchBirthdays(this.search);
    console.log('Returned array ', this.birthdays);
  }

}
