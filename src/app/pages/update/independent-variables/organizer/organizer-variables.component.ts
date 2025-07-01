import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fluid, FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
    selector: 'app-organizer-variables',
    imports: [ReactiveFormsModule, FluidModule, InputTextModule, CustomLabelDirective],
    templateUrl: './organizer-variables.component.html',
    styleUrl: './organizer-variables.component.scss'
})
export class OrganizerVariablesComponent {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
             localTypeId: ['', [Validators.required]],
             totalCapacity: ['', [Validators.required]]
        });
    }

    get localTypeIdField(){
        return this.form.controls['localTypeId'];
    }

    get totalCapacityField() {
        return this.form.controls['totalCapacity'];
    }
}
