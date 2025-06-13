import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'app-dates-1-11',
    imports: [ReactiveFormsModule, CustomLabelDirective, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule, SelectModule],
    templateUrl: './dates-1-11.component.html',
    styleUrl: './dates-1-11.component.scss'
})
export class Dates1_11Component {
    //Form declaration
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
        this.dates();
    }

    establishmentTypes = [
        { name: 'Hotel', value: 'hotel' },
        { name: 'Hostal', value: 'hostal' },
        { name: 'Otro', value: 'otro' }
    ];

    dates() {
        this.form = this.formBuilder.group({
            ruc: ['', Validators.required],
            establishmentCode: ['', Validators.required],
            stateRuc: ['', Validators.required],
            socialReason: ['', Validators.required],
            legalRepresentative: ['', Validators.required]
        });
    }

    //Geters for form controls
    get rucField(): AbstractControl {
        return this.form.controls['ruc'];
    }

    get establishmentCodeField(): AbstractControl {
        return this.form.controls['establishmentCode'];
    }

    get stateRucField(): AbstractControl {
        return this.form.controls['stateRuc'];
    }

    get socialReasonField(): AbstractControl {
        return this.form.controls['socialReason'];
    }

    get legalRepresentativeField(): AbstractControl {
        return this.form.controls['legalRepresentative'];
    }
}
