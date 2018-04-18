import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'FlowXO Birthdays';

  @Output() showAddBirthday = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  showAdd(){
    this.showAddBirthday.emit(true);
  }

}
