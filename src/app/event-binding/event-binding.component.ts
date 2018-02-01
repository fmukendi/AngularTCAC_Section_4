import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log('Button was clicked');
  }

  onEvent1($event) {
console.log('Event 1 was clicked', $event);
  }

  onDivClicked() {
   console.log('onDivClicked');
  }

  onEvent2($event) {
    $event.stopPropagation();
    console.log('Event 2 was clicked', $event);
      }
}
