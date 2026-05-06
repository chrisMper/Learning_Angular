import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
     <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
     </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section> 
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //Adding a new property to housing component class called housingLocationList of type HousingLocation[] and assign it to be an empty array

  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)

  constructor() {
    // using then() to get the data from the promise
    // using arrow function to get the data from the promise
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
    });
  }

}
