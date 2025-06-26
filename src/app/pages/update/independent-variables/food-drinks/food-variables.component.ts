import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
  selector: 'app-food-variables',
  imports: [ReactiveFormsModule, CustomLabelDirective, SelectModule, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule, SelectModule],
  templateUrl: './food-variables.component.html',
  styleUrl: './food-variables.component.scss'
})
export class FoodVariablesComponent {
      protected form!: FormGroup;
      protected formBuilder = inject(FormBuilder);

      constructor(){
        this.foodForm();
      }

      foodForm() {
        this.form = this.formBuilder.group({
           totalTables: ['', [Validators.required]],
           totalCapacityNumberPeople: ['', [Validators.required]],
           kitchenTypes: ['', [Validators.required]],
           typeService: ['', [Validators.required]],
           aventureTourismModalities: ['', [Validators.required]],
           ctcActivities: ['', [Validators.required]],
        })
      }

      get totalTables(): AbstractControl {
          return this.form.controls['totalTables'];
      }

      get totalCapacityNumberPeople(): AbstractControl {
          return this.form.controls['totalCapacityNumberPeople'];
      }

      get kitchenTypes(): AbstractControl {
          return this.form.controls['kitchenTypes'];
      }

      get typeService(): AbstractControl {
          return this.form.controls['typeService'];
      }     

      get aventureTourismModalities(): AbstractControl {
          return this.form.controls['aventureTourismModalities'];
      }

      get ctcActivities(): AbstractControl {
          return this.form.controls['ctcActivities'];
      }
}
