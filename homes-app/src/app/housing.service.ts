import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root' // This means the service will be available to the entire application
})
export class HousingService {
  url = 'http://localhost:3000/locations'; // url is the url of the API
  constructor() { }
  //method to get all the housing locations
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url); // fetch is used to make an HTTP request
    return data.json() ?? [];
  }
  //method to get a single housing location by id
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`); // this interpolation will insert the value of id into the url
    return data.json() ?? undefined;
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
