import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    console.log($event.target.value);
  }

  onKeyUp2(email) {
    console.log(email);
  }

}
