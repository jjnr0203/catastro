import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { DividerModule } from 'primeng/divider';
import { Dates_79_84Component } from '../../sections/dates-79-84/dates-79-84.component';
import { AccommodationVariablesComponent } from '../../independent-variables/accommodation/accommodation-variables.component';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
import { ProcedureComponent } from '../../sections/procedure/procedure.component';
import { EstablishmentComponent } from '../../sections/establishment/establishment.component';
import { LocationComponent } from '../../sections/location/location.component';

@Component({
    selector: 'app-acomodation',
    imports: [
        ReactiveFormsModule,
        SelectModule,
        DividerModule,
        PanelModule,
        FluidModule,
        InputTextModule,
        InputNumberModule,
        CardModule,
        TagModule,
        ProcedureComponent,
        EstablishmentComponent,
        Dates_79_84Component,
        AccommodationVariablesComponent,
        ButtonModule,
        LocationComponent
    ],
    templateUrl: './acomodation.component.html',
    styleUrl: './acomodation.component.scss'
})
export class AcomodationComponent {
    protected readonly PrimeIcons = PrimeIcons;

    @ViewChildren(ProcedureComponent) private procedureComponent!: QueryList<ProcedureComponent>;
    @ViewChildren(EstablishmentComponent) private establishmentComponent!: QueryList<EstablishmentComponent>;
    @ViewChildren(LocationComponent) private locationComponent!: QueryList<LocationComponent>;
    @ViewChildren(AccommodationVariablesComponent) private accommodationVariablesComponet!: QueryList<AccommodationVariablesComponent>;
    @ViewChildren(Dates_79_84Component) private dates_79_84Componet!: QueryList<Dates_79_84Component>;

    private formBuilder = inject(FormBuilder);

    protected mainForm!: FormGroup;

    //protected readonly customMessageService = inject(CustomMessageService);

    constructor() {
        this.mainForm = this.formBuilder.group({
            procedure: [null],
            establishment: [null],
            location: [null],
            accommodationVariables: [null],
            dates_79_84: [null]
        });
    }

    saveForm(childForm: FormGroup, componentName: string) {
        /*  Object.keys(childForm.controls).forEach((controlName) => {
            if (!this.mainForm.contains(controlName)) {
                this.mainForm.addControl(controlName, this.formBuilder.control(childForm.get(controlName)?.value));
            } else {
                this.mainForm.get(controlName)?.patchValue(childForm.get(controlName)?.value);
            }

        }); */

        switch (componentName) {
            case 'procedure':
                this.procedureField.patchValue(childForm.value);
                break;

            case 'establishment':
                this.establishmentField.patchValue(childForm.value);
                break;

            case 'location':
                this.locationField.patchValue(childForm.value);
                break;
        }
        console.log('Form1 updated:', this.mainForm.value);
        console.log('Form2 updated:', childForm.value);
        //console.log('Form3 updated:', childForm.value);
    }

    onSubmit() {
        if (!this.checkFormErrors()) {
            this.saveProcess();
        }
    }

    saveProcess() {
        console.log(this.mainForm.value);
    }

    checkFormErrors() {
        const errors: string[] = [
            ...this.procedureComponent.toArray().flatMap((c) => c.getFormErrors()),
            ...this.establishmentComponent.toArray().flatMap((c) => c.getFormErrors()),
            ...this.locationComponent.toArray().flatMap((c) => c.getFormErrors()),
            ...this.accommodationVariablesComponet.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_79_84Componet.toArray().flatMap((c) => c.getFormErrors())
        ];

        if (errors.length > 0) {
            //this.customMessageService.showFormErrors(errors);
            return false;
        }

        return true;
    }

    get procedureField(): AbstractControl {
        return this.mainForm.controls['procedure'];
    }

    get establishmentField(): AbstractControl {
        return this.mainForm.controls['establishment'];
    }
    
    get locationField(): AbstractControl {
        return this.mainForm.controls['location'];
    }
}
