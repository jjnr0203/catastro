import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-transport-variables',
    imports: [ReactiveFormsModule, FluidModule],
    templateUrl: './transport-variables.component.html',
    styleUrl: './transport-variables.component.scss'
})
export class TransportVariablesComponent {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
        this.buildForm();
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
    }

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
