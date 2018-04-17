import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TodaysBirthdaysComponent } from './todays-birthdays/todays-birthdays.component';
import { TodaysBirthdayCardComponent } from './todays-birthdays/todays-birthday-card/todays-birthday-card.component';
import {BirthdayService} from './service/birthday.service';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TodaysBirthdaysComponent,
    TodaysBirthdayCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BirthdayService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
