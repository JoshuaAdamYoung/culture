import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture-detail',
  templateUrl: './culture-detail.component.html',
  styleUrls: ['./culture-detail.component.css']
})
export class CultureDetailComponent implements OnInit {
  reviews: object[];
  data: object;
  constructor() {
    this.data = {
      image: 'This is an image placeholder',
      id: 12345,
      name: 'Scobtaculus',
      desc: 'This scoby will leave you with a vey fizzy very delicious kombucha. Tends towoards slight tanginess compared to other scoby\'s. Has been fed cocunut sugar almost exclusively.',
      family: 'SCOBY',
      type: 'Kombucha',
      environment: {
        bioregion: 'cascadia',
        subregion: 'rural',
        localEnvironment: 'forest'
      },
      parentCulture: 11342,
      childCultures: [
        16623,
        79251,
        92451
      ]
    };
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
