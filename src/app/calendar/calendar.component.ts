import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../user.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  name: string;
  date: Date;
  startTime: Time;
  finishTime: Time;
  notes: string;
  
  AddingEvent = new FormGroup({
    'name': new FormControl,
    'date': new FormControl,
    'startTime': new FormControl,
    'finishTime': new FormControl,
    'notes': new FormControl,
  });
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
