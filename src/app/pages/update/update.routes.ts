import { Routes } from "@angular/router";
import { AcomodationComponent } from "./activities/acomodation/acomodation.component";
import { FoodComponent } from "./activities/food/food.component";

export default [
    {path:'acomodation', component: AcomodationComponent},
    {path:'food', component: FoodComponent}
] as Routes;