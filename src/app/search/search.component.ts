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
  cleared: boolean = true;
  birthdays: Birthday[];

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit() {
  }

  onEnter(value: string){
    this.cleared = false;
    this.search = value;
    this.birthdays = this.birthdayService.searchBirthdays(this.search);
    this.search = '';
  }

  onClear(){
    this.cleared = true;
  }

}
