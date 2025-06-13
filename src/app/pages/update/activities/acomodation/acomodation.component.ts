import { Component, inject } from '@angular/core';
import { UpdateCatastroComponent } from '../../update-catastro.component';
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Dates1_11Component } from '../../dates/dates-1-11/dates-1-11.component';
import { Dates_14_37Component } from '../../dates/dates-14-37/dates-14-37.component';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
    selector: 'app-acomodation',
    imports: [ReactiveFormsModule, CustomLabelDirective, Dates1_11Component, Dates_14_37Component, UpdateCatastroComponent, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule],
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
            typePermises : ['', Validators.required],
        })
    }
    
}
