import { Component } from '@angular/core';
import { Dates_79_84Component } from "../../dates/dates-79-84/dates-79-84.component";
import { Dates_14_37Component } from "../../dates/dates-14-37/dates-14-37.component";
import { Dates1_12Component } from "../../dates/dates-1-12/dates-1-12.component";
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-attraction',
  imports: [Dates_79_84Component, Dates_14_37Component, Dates1_12Component, PanelModule, FluidModule],
  templateUrl: './attraction.component.html',
  styleUrl: './attraction.component.scss'
})
export class AttractionComponent {

}
