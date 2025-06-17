import { Component } from '@angular/core';
import { Dates1_12Component } from "../../dates/dates-1-12/dates-1-12.component";
import { Dates_14_37Component } from "../../dates/dates-14-37/dates-14-37.component";
import { Dates_79_84Component } from "../../dates/dates-79-84/dates-79-84.component";
import { FluidModule } from 'primeng/fluid';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-transport',
  imports: [Dates1_12Component, Dates_14_37Component, Dates_79_84Component, FluidModule, PanelModule],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss'
})
export class TransportComponent {

}
