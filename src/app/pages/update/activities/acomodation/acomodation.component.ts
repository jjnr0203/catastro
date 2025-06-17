import { Component, inject } from '@angular/core';
import { UpdateCatastroComponent } from '../../update-catastro.component';
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Dates_14_37Component } from '../../dates/dates-14-37/dates-14-37.component';
import { SelectModule } from 'primeng/select';
import { Dates1_12Component } from '../../dates/dates-1-12/dates-1-12.component';
import { DividerModule } from 'primeng/divider';
import { Dates_79_84Component } from '../../dates/dates-79-84/dates-79-84.component';
import { AccommodationVariablesComponent } from '../../independent-variables/accommodation/accommodation-variables.component';

@Component({
    selector: 'app-acomodation',
    imports: [ReactiveFormsModule, SelectModule, DividerModule, PanelModule, FluidModule, InputTextModule, InputNumberModule,
    CardModule, TagModule, Dates1_12Component, Dates_14_37Component, Dates_79_84Component, AccommodationVariablesComponent],
    templateUrl: './acomodation.component.html',
    styleUrl: './acomodation.component.scss'
})
export class AcomodationComponent {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
        this.acomodationForm();
    }

    acomodationForm() {
        this.form = this.formBuilder.group({
            typePermises: ['', Validators.required]
        });
    }

    get typePermises(): AbstractControl {
        return this.form.controls['typePermises'];
    }
}
