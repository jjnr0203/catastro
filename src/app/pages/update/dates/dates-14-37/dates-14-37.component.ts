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
    selector: 'app-dates-14-37',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './dates-14-37.component.html',
    styleUrl: './dates-14-37.component.scss'
})
export class Dates_14_37Component {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
        this.dates();
    }

    dates() {
        this.form = this.formBuilder.group({
            typeEstablishment: ['', Validators.required],
            name: ['', Validators.required],
            typeLegalStatus: ['', Validators.required],
            legalStatus: ['', Validators.required],
            province: ['', [Validators.required]],
            canton: ['', [Validators.required]],
            parroquial: ['', [Validators.required]],
            parishType: ['', Validators.required],
            address: ['', Validators.required],
            referenceStreet: ['', [Validators.required]],
            phonePrincipal: ['', [Validators.required]],
            phoneSecondary: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            webPage: ['', [Validators.required]],
            latitude: ['', [Validators.required]],
            longitude: ['', [Validators.required]],
            establishmentStatus: ['', Validators.required],
            origenSystem: ['', Validators.required],
            debtregistration: ['', [Validators.required]],
            menTotal: ['', [Validators.required]],
            womenTotal: ['', [Validators.required]],
            disabledMen: ['', [Validators.required]],
            disabledWomen: ['', [Validators.required]],
            totalWorker: ['', Validators.required]
        });
    }

    get typeEstablishmentField(): AbstractControl {
        return this.form.controls['typeEstablishment'];
    }

    get nameField(): AbstractControl {
        return this.form.controls['name'];
    }

    get typeLegalStatusField(): AbstractControl {
        return this.form.controls['typeLegalStatus'];
    }

    get parishTypeField(): AbstractControl {
        return this.form.controls['parishType'];
    }

    get directionField(): AbstractControl {
        return this.form.controls['direction'];
    }

    get establishmentStatusField(): AbstractControl {
        return this.form.controls['establishmentStatus'];
    }

    get origenSystemField(): AbstractControl {
        return this.form.controls['origenSystem'];
    }

    get totalWorkerField(): AbstractControl {
        return this.form.controls['totalWorker'];
    }
}
