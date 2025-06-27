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
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            establishments: ['', Validators.required],
            name: ['', Validators.required],
            juridicalPersons: ['', Validators.required],
            legalStatus: ['', Validators.required],
            province: ['', [Validators.required]],
            canton: ['', [Validators.required]],
            parish: ['', [Validators.required]],
            parishType: ['', Validators.required],
            address: ['', Validators.required],
            referenceStreet: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            secondaryPhone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            webPage: ['', [Validators.required]],
            latitude: ['', [Validators.required]],
            longitude: ['', [Validators.required]],
            establishmentStatus: ['', Validators.required],
            systemOrigin: ['', Validators.required],
            hasDebt: ['', [Validators.required]],
            totalMen: ['', [Validators.required]],
            totalWomen: ['', [Validators.required]],
            totalMenDisability: ['', [Validators.required]],
            totalWomenDisability: ['', [Validators.required]],
            totalWorker: ['', Validators.required]
        });
    }

    get establishmentsField(): AbstractControl {
        return this.form.controls['establishments'];
    }

    get nameField(): AbstractControl {
        return this.form.controls['name'];
    }

    get juridicalPersonsField(): AbstractControl {
        return this.form.controls['juridicalPersons'];
    }

    get legalStatusField(): AbstractControl {
        return this.form.controls['legalStatus'];
    }

    get provinceField(): AbstractControl {
        return this.form.controls['province'];
    }

    get cantonField(): AbstractControl {
        return this.form.controls['canton'];
    }

    get parishField(): AbstractControl {
        return this.form.controls['parish'];
    }

    get parishTypeField(): AbstractControl {
        return this.form.controls['parishType'];
    }

    get addressField(): AbstractControl {
        return this.form.controls['address'];
    }

    get referenceStreetField(): AbstractControl {
        return this.form.controls['referenceStreet'];
    }

    get phoneField(): AbstractControl {
        return this.form.controls['phone'];
    }

    get secondaryPhoneField(): AbstractControl {
        return this.form.controls['secondaryPhone'];
    }

    get latitudeField(): AbstractControl {
        return this.form.controls['latitude'];
    }

    get longitudeField(): AbstractControl {
        return this.form.controls['longitude'];
    }

    get emailField(): AbstractControl {
        return this.form.controls['email'];
    }

    get webPageField(): AbstractControl {
        return this.form.controls['webPage'];
    }

    get establishmentStatusField(): AbstractControl {
        return this.form.controls['establishmentStatus'];
    }

    get systemOriginField(): AbstractControl {
        return this.form.controls['systemOrigin'];
    }

    get hasDebtField(): AbstractControl {
        return this.form.controls['hasDebt'];
    }

    get totalMenField(): AbstractControl {
        return this.form.controls['totalMen'];
    }

    get totalWomenField(): AbstractControl {
        return this.form.controls['totalWomen'];
    }
    
    get totalMenDisabilityField(): AbstractControl {
        return this.form.controls['totalMenDisability'];
    }
    
    get totalWomenDisabilityField(): AbstractControl {
        return this.form.controls['totalWomenDisability'];
    }
}
