import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">
          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email">
          <button type="submit" class="primary">Apply</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);// activated route is the object that contains information about the current route.

  // housingLocationId is the id of the housing location
  // housingLocationId: number = 0;

  housingService: HousingService = inject(HousingService); // housingService is the service that is used to get the housing location data
  housingLocation: HousingLocation | undefined; // housingLocation is the housing location data
  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  }); // applyForm is the form that is used to apply for the housing location


  //constructor is used to initialize the component.
  //inject is a function that is used to inject a service into a component.
  //ActivatedRoute is a service that is used to get information about the current route.
  constructor() {
    // this.housingLocationId = Number(this.route.snapshot.params['id']);
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  //In the below to access the values from Formgroup apply form we use .value.fieldname
  //To pass the values to the service we use ?? operator to handle the null values. 
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
