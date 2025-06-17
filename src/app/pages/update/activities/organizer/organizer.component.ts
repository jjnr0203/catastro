import { Component } from '@angular/core';
import { Dates1_12Component } from "../../dates/dates-1-12/dates-1-12.component";
import { Dates_14_37Component } from "../../dates/dates-14-37/dates-14-37.component";
import { Dates_79_84Component } from "../../dates/dates-79-84/dates-79-84.component";
import { FluidModule } from 'primeng/fluid';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-organizer',
  imports: [Dates1_12Component, Dates_14_37Component, Dates_79_84Component, FluidModule, PanelModule],
  templateUrl: './organizer.component.html',
  styleUrl: './organizer.component.scss'
})
export class OrganizerComponent {

}
