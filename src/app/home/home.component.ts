import { Component, inject } from '@angular/core';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {CommonModule} from "@angular/common";
import {HousingLocation} from "../housinglocation";
import {HousingService} from "../housing.service";

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
      <section>
          <form>
              <input type="text" placeholder="Filter by city" #filter/>
              <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
          </form>
      </section>
      <section class="results">
          <app-housing-location 
                  *ngFor="let housingLocationValue of filteredLocationList"
                  [housingLocationAttribute]="housingLocationValue"
          ></app-housing-location>
      </section>
  `,
  styleUrls: [
      '../app.component.css'
  ],
})

export class HomeComponent {
    housingLocationValueList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);
    filteredLocationList: HousingLocation[] = [];

    constructor() {
        this.housingService.getAllHousingLocations()
            .then((housingLocationValueList: HousingLocation[]) => {
                this.housingLocationValueList = housingLocationValueList;
                this.filteredLocationList = housingLocationValueList;
        });
    }

    filterResults(text: string) {
        if (!text) {
            this.filteredLocationList = this.housingLocationValueList;
            return;
        }

        this.filteredLocationList = this.housingLocationValueList
            .filter((housingLocation) =>
                housingLocation?.city.toLowerCase().includes(text.toLowerCase())
        );
    }
}
