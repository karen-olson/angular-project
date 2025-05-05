import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HousingLocation} from "../housinglocation";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocationAttribute.photo"
        alt="Exterior photo of {{ housingLocationAttribute.name }}"
      />
      <h2 class="listing-heading">{{ housingLocationAttribute.name }}</h2>
      <p class="listing-location">{{ housingLocationAttribute.city }}, {{ housingLocationAttribute.state }}</p>
      <a [routerLink]="['/details', housingLocationAttribute.id]">Learn More</a>
    </section>
  `,
  styleUrls: [`./housing-location.component.css`]
})

export class HousingLocationComponent {
  @Input() housingLocationAttribute!: HousingLocation;
}
