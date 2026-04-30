import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
     <!-- we display the details of the housing location using interpolation -->
      details works! {{housingLocationId}}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // activated route is the object that contains information about the current route.
  route: ActivatedRoute = inject(ActivatedRoute);
  // housingLocationId is the id of the housing location
  housingLocationId: number = 0;

  //constructor is used to initialize the component.
  //inject is a function that is used to inject a service into a component.
  //ActivatedRoute is a service that is used to get information about the current route.
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }

}
