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
            localTypeId: ['', [Validators.required]],
            totalCapacity: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]]
        });
    }

    get localTypeId() {
        return this.form.get('localType');
    }

    get totalCapacityField() {
        return this.form.controls['localTypeId'];
    }

    get aventureTourismModalities() {
        return this.form.controls['localTypeId']
    }
}
