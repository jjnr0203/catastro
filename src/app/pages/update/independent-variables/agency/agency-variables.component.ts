import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
  selector: 'app-agency-variables',
  imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
  templateUrl: './agency-variables.component.html',
  styleUrl: './agency-variables.component.scss'
})
export class AgencyVariablesComponent {
   protected form!: FormGroup;
   protected formBuilder = inject(FormBuilder);
  
      constructor() {
        this.agencyForm();
      }

      agencyForm() {
        this.form = this.formBuilder.group({
          aventureTourismModalities: ['',[Validators.required]],
          tourGuideId: ['', [Validators.required]],
          nameTourGuides: ['', [Validators.required]],
          rucTransportationCompanies: ['', [Validators.required]],
          companyNameTransportation: ['', [Validators.required]],
          salesRespresentativeId: ['', [Validators.required]],
          nameSalesRepresentative: ['', [Validators.required]],
        });
      }

      get aventureTourismModalities(): AbstractControl {
          return this.form.controls['aventureTourismModalities'];
      }

      get tourGuideId(): AbstractControl {
          return this.form.controls['tourGuideId'];
      }

      get nameTourGuides(): AbstractControl {
          return this.form.controls['nameTourGuides'];
      }

      get rucTransportationCompanies(): AbstractControl {
          return this.form.controls['rucTransportationCompanies'];
      }

      get companyNameTransportation(): AbstractControl {
          return this.form.controls['companyNameTransportation'];
      }

      get salesRespresentativeId(): AbstractControl {
          return this.form.controls['salesRespresentativeId'];
      }

      get nameSalesRepresentative(): AbstractControl {
          return this.form.controls['nameSalesRepresentative'];
      }
}
