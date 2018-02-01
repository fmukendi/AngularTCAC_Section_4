import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-fitering',
  templateUrl: './event-fitering.component.html',
  styleUrls: ['./event-fitering.component.css']
})
export class EventFiteringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    console.log('on Key Up');
    if ($event.KeyCode === 13) {
      console.log('Enter was presser');
    }
  }

  onKeyUp2() {
    console.log('Enter was presser');
  }

}
