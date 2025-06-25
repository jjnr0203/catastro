import { Component, effect, inject, input } from '@angular/core';
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
    selector: 'app-dates-1-12',
    imports: [ReactiveFormsModule, CustomLabelDirective, SelectModule, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule, SelectModule],
    templateUrl: './dates-1-12.component.html',
    styleUrl: './dates-1-12.component.scss'
})
export class Dates1_12Component {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);
    
    showLocalType = input<boolean>(true);
    showLocalTypeEffect = effect(() => {
        if (!this.showLocalType()) {
            this.form.removeControl('localType');
            console.log('Type establishment control removed from form', this.form.controls);
        }
    });

    constructor() {
        this.dates();
    }

    dates() {
        this.form = this.formBuilder.group({
            ruc: ['', Validators.required],
            establishmentCode: ['', Validators.required],
            stateRuc: ['', Validators.required],
            comercialName: ['', [Validators.required]],
            registerNumber: ['', [Validators.required]],
            registerDate: ['', [Validators.required]],
            activities: ['', [Validators.required]],
            classification: ['', [Validators.required]],
            categorie: ['', [Validators.required]],
            socialReason: ['', Validators.required],
            legalRepresentative: ['', Validators.required],
            localType: ['', Validators.required]
        });
    }

    //Geters for form controls
    get rucField(): AbstractControl {
        return this.form.controls['ruc'];
    };

    get establishmentCodeField(): AbstractControl {
        return this.form.controls['establishmentCode'];
    };

    get stateRucField(): AbstractControl {
        return this.form.controls['stateRuc'];
    };

    get comercialNameField(): AbstractControl {
        return this.form.controls['comercialName'];
    };

    get registerNumberField(): AbstractControl {
        return this.form.controls['registerNumber'];
    };

    get registerDateField(): AbstractControl {
        return this.form.controls['registerDate'];
    };

    get activitiesField(): AbstractControl {
        return this.form.controls['activities'];
    };

    get classificationField(): AbstractControl {
        return this.form.controls['classification'];
    };

    get categorieField(): AbstractControl {
        return this.form.controls['categorie'];
    };

    get socialReasonField(): AbstractControl {
        return this.form.controls['socialReason'];
    };

    get legalRepresentativeField(): AbstractControl {
        return this.form.controls['legalRepresentative'];
    };

    get localTypeField(): AbstractControl | null {
        return this.form.controls['localType'] || null;
    };
}
