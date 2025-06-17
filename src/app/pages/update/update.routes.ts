import { Routes } from "@angular/router";
import { AcomodationComponent } from "./activities/acomodation/acomodation.component";
import { FoodComponent } from "./activities/food/food.component";
import { AgencyComponent } from "./activities/agency/agency.component";
import { AttractionComponent } from "./activities/attraction/attraction.component";
import { CommunityComponent } from "./activities/community/community.component";
import { GuidanceComponent } from "./activities/guidance/guidance.component";
import { OrganizerComponent } from "./activities/organizer/organizer.component";
import { TransportComponent } from "./activities/transport/transport.component";

export default [
    {path:'acomodation', component: AcomodationComponent},
    {path:'agency', component: AgencyComponent},
    {path:'attraction', component: AttractionComponent},
    {path:'community', component: CommunityComponent},
    {path:'food', component: FoodComponent},
    {path:'guidance', component: GuidanceComponent},
    {path:'organizer', component: OrganizerComponent},
    {path:'transport', component: TransportComponent},
] as Routes;