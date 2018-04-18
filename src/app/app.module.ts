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
import {MaterialModule} from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CustomSnackbarComponent} from './custom-snackbar/custom-snackbar.component';
import {SearchResultsComponent} from './search/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TodaysBirthdaysComponent,
    UpcomingBirthdaysComponent,
    MyBirthdaysComponent,
    AddBirthdayComponent,
    CustomSnackbarComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [
  CustomSnackbarComponent
],
  providers: [BirthdayService, DatePipe],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
