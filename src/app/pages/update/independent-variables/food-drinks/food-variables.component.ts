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

    constructor() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            totalTables: ['', [Validators.required]],
            totalCapacities: ['', [Validators.required]],
            // kitchenTypes: ['', [Validators.required]],
            serviceType: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]],
            ctcActivities: ['', [Validators.required]]
        });
    }

    get totalTablesField(): AbstractControl {
        return this.form.controls['totalTables'];
    }

    get totalCapacitiesField(): AbstractControl {
        return this.form.controls['totalCapacities'];
    }

    /* get kitchenTypes(): AbstractControl {
        return this.form.controls['kitchenTypes'];
    } */

    get serviceTypeField(): AbstractControl {
        return this.form.controls['serviceType'];
    }

    get aventureTourismModalitiesField(): AbstractControl {
        return this.form.controls['aventureTourismModalities'];
    }

    get ctcActivitiesField(): AbstractControl {
        return this.form.controls['ctcActivities'];
    }
}
