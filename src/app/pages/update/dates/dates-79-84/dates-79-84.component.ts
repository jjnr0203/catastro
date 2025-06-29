import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'app-dates-79-84',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './dates-79-84.component.html',
    styleUrl: './dates-79-84.component.scss'
})
export class Dates_79_84Component {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
        this.dates();
    }

    dates() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            typeProcedure: ['', Validators.required],
            dateProcessing: ['', Validators.required],
            systemModication: ['', Validators.required],
            observation: ['', Validators.required]
        });
    }

    get nameField(): AbstractControl {
        return this.form.controls['name'];
    }

    get emailField(): AbstractControl {
        return this.form.controls['email'];
    }

    get typeProcedure(): AbstractControl {
        return this.form.controls['typeProcedure'];
    }

    get dateProcessing(): AbstractControl {
        return this.form.controls['dateProcessing'];
    }

    get systemModication(): AbstractControl {
        return this.form.controls['systemModication'];
    }

    get observation(): AbstractControl {
        return this.form.controls['observation'];
    }
}
