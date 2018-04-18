import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {TodaysBirthdaysComponent} from './todays-birthdays/todays-birthdays.component';
import {BirthdayService} from './service/birthday.service';
import {DatePipe} from '@angular/common';
import {UpcomingBirthdaysComponent} from './upcoming-birthdays/upcoming-birthdays.component';
import {MyBirthdaysComponent} from './my-birthdays/my-birthdays.component';
import {AddBirthdayComponent} from './add-birthday/add-birthday.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TodaysBirthdaysComponent,
    UpcomingBirthdaysComponent,
    MyBirthdaysComponent,
    AddBirthdayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BirthdayService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
