import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';

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
        Dates1_12Component,
        Dates_14_37Component,
        Dates_79_84Component,
        AccommodationVariablesComponent,
        ButtonModule
    ],
    templateUrl: './acomodation.component.html',
    styleUrl: './acomodation.component.scss'
})
export class AcomodationComponent {
    protected readonly PrimeIcons = PrimeIcons;

    @ViewChildren(Dates1_12Component) private dates1_12Componet!: QueryList<Dates1_12Component>;
    @ViewChildren(Dates_14_37Component) private dates_14_37Componet!: QueryList<Dates_14_37Component>;
    @ViewChildren(AccommodationVariablesComponent) private accommodationVariablesComponet!: QueryList<AccommodationVariablesComponent>;
    @ViewChildren(Dates_79_84Component) private dates_79_84Componet!: QueryList<Dates_79_84Component>;

    private formBuilder = inject(FormBuilder);

    protected mainForm!: FormGroup;

    //protected readonly customMessageService = inject(CustomMessageService);

    constructor() {
        this.mainForm = this.formBuilder.group({
            dates1_12: [null],
            dates_14_37: [null],
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
                case 'dates1_12': 
                this.dates1_12Field.patchValue(childForm.value) 
                break

                case 'x': 
                this.dates14_37Field.patchValue(childForm.value) 
                break

                }
                console.log('Form1 updated:', childForm.value);
                console.log('Form2 updated:', this.mainForm.value);
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
            ...this.dates1_12Componet.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_14_37Componet.toArray().flatMap((c) => c.getFormErrors()),
            ...this.accommodationVariablesComponet.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_79_84Componet.toArray().flatMap((c) => c.getFormErrors())
        ];

        if (errors.length > 0) {
            //this.customMessageService.showFormErrors(errors);
            return false;
        }

        return true;
    }

    get dates1_12Field(): AbstractControl { 
            return this.mainForm.controls['dates1_12'] ; 
        }

        get dates14_37Field(): AbstractControl { 
            return this.mainForm.controls['dates_14_37'] ; 
        }
}
