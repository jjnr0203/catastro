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
        this.organizerForm();
    }

    organizerForm() {
        this.form = this.formBuilder.group({
            totalCapacityActivies: ['', [Validators.required]]
        });
    }
}
