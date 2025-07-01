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
        this.buildForm();
      }

      buildForm() {
        this.form = this.formBuilder.group({
          localTypeId: ['', [Validators.required]],
          permanentPhysicalSpaceId: ['', [Validators.required]],
          aventureTourismModalities: ['',[Validators.required]],
          identification: ['', [Validators.required]],
          name: ['', [Validators.required]],
          ruc: ['', [Validators.required]],
          touristTransportCompanies: ['', [Validators.required]],
          sales_representatives: ['', [Validators.required]],
          legalName: ['', [Validators.required]],
        });
      }

      get localTypeIdField(): AbstractControl {
          return this.form.controls['localTypeId'];
      }

       get permanentPhysicalSpaceIdField(): AbstractControl {
          return this.form.controls['permanentPhysicalSpaceId'];
      }

      get aventureTourismModalitiesField(): AbstractControl {
          return this.form.controls['aventureTourismModalities'];
      }

      get identificationField(): AbstractControl {
          return this.form.controls['identification'];
      }

      get nameField(): AbstractControl {
          return this.form.controls['name'];
      }

      get rucField(): AbstractControl {
          return this.form.controls['ruc'];
      }

      get touristTransportCompaniesField(): AbstractControl {
          return this.form.controls['touristTransportCompanies'];
      }

      get sales_representativesField(): AbstractControl {
          return this.form.controls['sales_representatives'];
      }

      get legalNameField(): AbstractControl {
          return this.form.controls['legalName'];
      }
}
