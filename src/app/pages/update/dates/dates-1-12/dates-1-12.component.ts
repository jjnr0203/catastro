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
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            ruc: ['', Validators.required],
            code: ['', Validators.required],
            stateRuc: ['', Validators.required], //review name variable
            tradeName: ['', [Validators.required]],
            registerNumber: ['', [Validators.required]],
            registeredAt: ['', [Validators.required]],
            activities: ['', [Validators.required]],
            sort: ['', [Validators.required]],
            categorie: ['', [Validators.required]],
            socialReason: ['', Validators.required], //review name variable
            legalName: ['', Validators.required],
        });
    }

    //Geters for form controls
    get rucField(): AbstractControl {
        return this.form.controls['ruc'];
    };

    get codeField(): AbstractControl {
        return this.form.controls['code'];
    };

    get stateRucField(): AbstractControl {
        return this.form.controls['stateRuc'];
    };

    get tradeNameField(): AbstractControl {
        return this.form.controls['tradeName'];
    };

    get registerNumberField(): AbstractControl {
        return this.form.controls['registerNumber'];
    };

    get registeredAtField(): AbstractControl {
        return this.form.controls['registeredAt'];
    };

    get activitiesField(): AbstractControl {
        return this.form.controls['activities'];
    };

    get sortField(): AbstractControl {
        return this.form.controls['sort'];
    };

    get categorieField(): AbstractControl {
        return this.form.controls['categorie'];
    };

    get socialReasonField(): AbstractControl {
        return this.form.controls['socialReason'];
    };

    get legalNameField(): AbstractControl {
        return this.form.controls['legalName'];
    };
}
