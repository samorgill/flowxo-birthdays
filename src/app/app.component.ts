import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {CustomSnackbarComponent} from './custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = Date.now();
  selected = false;

  constructor(public snackbar: MatSnackBar){}

  showAddBday(event: boolean) {
    this.selected = event;

  }

  onSubmitted(){
    this.selected = false;
    this.snackbar.openFromComponent(CustomSnackbarComponent, {duration: 10000});
  }

}
