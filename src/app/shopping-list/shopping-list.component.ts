import { TestingService } from './../testing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(public testing: TestingService) { }

  ngOnInit() {
    this.second();
  }

  second(): void {
    let i = 0;
    setInterval(() => {
      i += 1;
      this.testing.testEvent.emit(i);
    }, 1000);
  }

}
