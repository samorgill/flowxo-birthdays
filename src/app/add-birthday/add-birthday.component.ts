import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Birthday} from '../service/birthday-model';
import {BirthdayService} from '../service/birthday.service';
import {MatSnackBar} from '@angular/material';
import {SentComponent} from '../sent/sent.component';

@Component({
  selector: 'app-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrls: ['./add-birthday.component.scss']
})
export class AddBirthdayComponent implements OnInit {

  name: string;
  dob: string;

  @Output() addSubmitted = new EventEmitter<boolean>();

  constructor(private birthdayService: BirthdayService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  addBirthday() {
    let newBirthday = new Birthday();
    newBirthday.name = this.name;
    newBirthday.birthday = this.dob;
    newBirthday.age = this.birthdayService.getAge(newBirthday);
    newBirthday.timeToNext = this.birthdayService.timeToNext(newBirthday);

    console.log(newBirthday);
    this.birthdayService.addBirthday(newBirthday);
  }

  onSubmit() {
    this.addSubmitted.emit(true);
  }

}
