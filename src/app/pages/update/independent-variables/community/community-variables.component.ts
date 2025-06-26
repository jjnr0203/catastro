import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
  selector: 'app-community-variables',
  imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
  templateUrl: './community-variables.component.html',
  styleUrl: './community-variables.component.scss'
})
export class CommunityVariablesComponent {
      protected form!: FormGroup;
      protected formBuilder = inject(FormBuilder);
  
      constructor() {
        this.communityForm();
      }

      communityForm() {
          this.form = this.formBuilder.group({
             totalRooms: ['', [Validators.required]],
             totalBeds: ['', [Validators.required]],
             totalPlaces: ['', [Validators.required]],
             totalComplementaryServices: ['', [Validators.required]],
             totalTables: ['', [Validators.required]],
             totalCapacityNumberPeople: ['', [Validators.required]],
             aventureTourismModalities: ['', [Validators.required]],
             ctcActivities: ['', [Validators.required]],
             tourGuideId: ['', [Validators.required]],
             nameTourGuides: ['', [Validators.required]],
             rucTransportationCompanies: ['', [Validators.required]],
             companyNameTransportation: ['', [Validators.required]],
          });
      }

      get totalRooms() {
        return this.form.get('totalRooms');
      } 

      get totalBeds() {
        return this.form.get('totalBeds');
      } 

      get totalPlaces() {
        return this.form.get('totalPlaces');
      } 

      get totalComplementaryServices() {
        return this.form.get('totalComplementaryServices');
      }   

      get totalTables() {
        return this.form.get('totalTables');
      }

      get totalCapacityNumberPeople() {
        return this.form.get('totalCapacityNumberPeople');
      } 

      get aventureTourismModalities() {
        return this.form.get('aventureTourismModalities');
      }     

      get ctcActivities() {
        return this.form.get('ctcActivities');
      }   

      get tourGuideId() {
        return this.form.get('tourGuideId');
      } 

      get nameTourGuides() {
        return this.form.get('nameTourGuides');
      } 

      get rucTransportationCompanies() {
        return this.form.get('rucTransportationCompanies');
      } 

      get companyNameTransportation() {
        return this.form.get('companyNameTransportation');
      } 
}
