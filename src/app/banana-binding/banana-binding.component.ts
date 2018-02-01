import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banana-binding',
  templateUrl: './banana-binding.component.html',
  styleUrls: ['./banana-binding.component.css']
})
export class BananaBindingComponent implements OnInit {
  email = 'me@example.com';
  constructor() { }

  ngOnInit() {
  }

  onKeyUp () {
    console.log(this.email);
  }

}
