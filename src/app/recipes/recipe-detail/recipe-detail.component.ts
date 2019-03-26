import { TestingService } from './../../testing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  counting = 0;
  constructor(public counter: TestingService) { }

  ngOnInit() {
    this.counter.testEvent.subscribe(
      (val: number) => this.counting = val
    );
  }

}
