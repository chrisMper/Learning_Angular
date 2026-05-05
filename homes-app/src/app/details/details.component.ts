import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" alt="Exterior photo of the house">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
        <p></p> 
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Wi-Fi: {{housingLocation?.wifi}}</li>
          <li>Laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply to live here</h2>
        <button class="primary">Apply now</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // activated route is the object that contains information about the current route.
  route: ActivatedRoute = inject(ActivatedRoute);

  // housingLocationId is the id of the housing location
  // housingLocationId: number = 0;

  // housingService is the service that is used to get the housing location data
  housingService: HousingService = inject(HousingService);
  // housingLocation is the housing location data
  housingLocation: HousingLocation | undefined;

  //constructor is used to initialize the component.
  //inject is a function that is used to inject a service into a component.
  //ActivatedRoute is a service that is used to get information about the current route.
  constructor() {
    // this.housingLocationId = Number(this.route.snapshot.params['id']);
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

}
