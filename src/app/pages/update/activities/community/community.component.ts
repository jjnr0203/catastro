import { Component } from '@angular/core';
import { Dates1_12Component } from "../../dates/dates-1-12/dates-1-12.component";
import { Dates_14_37Component } from "../../dates/dates-14-37/dates-14-37.component";
import { Dates_79_84Component } from "../../dates/dates-79-84/dates-79-84.component";
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { DividerModule } from 'primeng/divider';
import { CommunityVariablesComponent } from "../../independent-variables/community/community-variables.component";

@Component({
  selector: 'app-community',
  imports: [Dates1_12Component, Dates_14_37Component, Dates_79_84Component, PanelModule, FluidModule, DividerModule, CommunityVariablesComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
