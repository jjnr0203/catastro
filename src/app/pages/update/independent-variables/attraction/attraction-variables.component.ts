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
  selector: 'app-attraccion-variables',
  imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
  templateUrl: './attraction-variables.component.html',
  styleUrl: './attraction-variables.component.scss'
})
export class AttraccionVariablesComponent {
      protected form!: FormGroup;
      protected formBuilder = inject(FormBuilder);
  
      constructor() {
        this.attractionForm();
      }

      attractionForm() {
          this.form = this.formBuilder.group({
              totalCapacityActivies: ['', [Validators.required]],
              aventureTourismModalities: ['', [Validators.required]],
          });
      }

      get totalCapacityActivies() {
        return this.form.get('totalCapacityActivies');
      }

      get aventureTourismModalities() {
        return this.form.get('aventureTourismModalities');
      }
}
