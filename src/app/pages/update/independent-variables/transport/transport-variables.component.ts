import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { FluidModule } from 'primeng/fluid';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-transport-variables',
    imports: [ReactiveFormsModule, FluidModule],
    templateUrl: './transport-variables.component.html',
    styleUrl: './transport-variables.component.scss'
})
export class TransportVariablesComponent implements OnInit {

    @Input() data!: string | undefined;
    @Output() dataOut = new EventEmitter<FormGroup>();
    @Output() fieldErrorsOut = new EventEmitter<string[]>();
    
    protected readonly formBuilder = inject(FormBuilder);
    //protected readonly customMessageService = inject(CustomMessageService);
    protected readonly PrimeIcons = PrimeIcons;

    protected form!: FormGroup;


    constructor() {
        this.buildForm();
    }

    ngOnInit() {
        this.loadData()
    }

    buildForm() {
        this.form = this.formBuilder.group({
            enablingTitle: ['', [Validators.required]],
            issueAt: ['', [Validators.required]],
            expirationAt: ['', [Validators.required]],
            typeVehicle: ['', [Validators.required]],
            registration: ['', [Validators.required]],
            registrationAt: ['', [Validators.required]],
            registrationExpirationAt: ['', [Validators.required]],
            capacity: ['', [Validators.required]],
            totalUnits: ['', [Validators.required]],
            totalSeats: ['', [Validators.required]],
            typeTransportLocation: ['', [Validators.required]],
            typeBoats: ['', [Validators.required]],
            boatModality: ['', [Validators.required]],
            enrollBoats: ['', [Validators.required]],
            totalBoatCapacities: ['', [Validators.required]]
        });
        this.watchFormChanges();
    }

    watchFormChanges() {
        this.form.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((_) => {
            if (this.form.valid) {
                this.dataOut.emit(this.form);
            }
        });
    }

    getFormErrors(): string[] {
        const errors: string[] = [];

        /* if (this.totalAccreditedStaffLanguageField.invalid) errors.push('¿Cuántas personas están acreditadas como mínimo el nivel B1 de conocimiento de al menos un idioma extranjero de acuerdo al Marco Común Europeo para las Lenguas?');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        } */

        return [];
    }

    loadData() {}

    get enablingTitleField() {
        return this.form.controls['enablingTitle'];
    }

    get issueAtField() {
        return this.form.controls['issueAt'];
    }

    get expirationAtField() {
        return this.form.controls['expirationAt'];
    }

    get typeVehicleField() {
        return this.form.controls['typeVehicle'];
    }

    get registrationField() {
        return this.form.controls['registration'];
    }

    get registrationAtField() {
        return this.form.controls['registrationAt'];
    }

    get registrationExpirationAtField() {
        return this.form.controls['registrationExpirationAt'];
    }

    get capacityField() {
        return this.form.controls['capacity'];
    }

    get totalUnitsField() {
        return this.form.controls['totalUnits'];
    }

    get totalSeatsField() {
        return this.form.controls['totalSeats'];
    }

    get typeTransportLocationField() {
        return this.form.controls['typeTransportLocation'];
    }

    get typeBoatsField() {
        return this.form.controls['typeBoats'];
    }

    get boatModalityField() {
        return this.form.controls['boatModality'];
    }

    get enrollBoatsField() {
        return this.form.controls['enrollBoats'];
    }

    get totalBoatCapacitiesField() {
        return this.form.controls['totalBoatCapacities'];
    }

    
}
