import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture-detail',
  templateUrl: './culture-detail.component.html',
  styleUrls: ['./culture-detail.component.css']
})
export class CultureDetailComponent implements OnInit {
  reviews: object[];
  constructor() {
    this.reviews = [
      {
        user: 'SomeGuy',
        review: 'Wow, what a scoby! The booch tastes great!',
        date: new Date(2017, 11, 5),
        rating: 7.2
      },
      {
        user: 'SomeGuy',
        review: 'Wow, what a scoby! The booch tastes great!',
        date: new Date(2017, 11, 5),
        rating: 7.2
      },
      {
        user: 'SomeGuy',
        review: 'Wow, what a scoby! The booch tastes great!',
        date: new Date(2017, 11, 5),
        rating: 7.2
      },
      {
        user: 'SomeGuy',
        review: 'Wow, what a scoby! The booch tastes great!',
        date: new Date(2017, 11, 5),
        rating: 7.2
      }
    ]
  }

  ngOnInit() {
  }

}
