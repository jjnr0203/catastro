import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { PrimeIcons } from 'primeng/api';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-community-variables',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './community-variables.component.html',
    styleUrl: './community-variables.component.scss'
})
export class CommunityVariablesComponent implements OnInit {
    @Input() data!: string | undefined;
    @Output() dataOut = new EventEmitter<FormGroup>();
    @Output() fieldErrorsOut = new EventEmitter<string[]>();

    private readonly formBuilder = inject(FormBuilder);
    /* protected readonly customMessageService = inject(CustomMessageService); */
    protected readonly PrimeIcons = PrimeIcons;

    protected form!: FormGroup;

    constructor() {
        this.buildForm();
    }

    ngOnInit() {
        this.loadData();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            totalRooms: ['', [Validators.required]],
            totalBeds: ['', [Validators.required]],
            totalPlaces: ['', [Validators.required]],
            totalComplementaryServices: ['', [Validators.required]],
            totalTables: ['', [Validators.required]],
            totalCapacities: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]],
            identification: ['', [Validators.required]],
            name: ['', [Validators.required]],
            ruc: ['', [Validators.required]],
            touristTransportCompanies: ['', [Validators.required]]
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

        if (this.totalBedsField.invalid) errors.push('El total de camas es obligatorio.');
        if (this.totalPlacesField.invalid) errors.push('El total de plazas es obligatorio.');
        if (this.totalComplementaryServicesField.invalid) errors.push('El total de servicios complementarios es obligatorio.');
        if (this.totalTablesField.invalid) errors.push('El total de mesas es obligatorio.');
        if (this.totalCapacitiesField.invalid) errors.push('El total de capacidades es obligatorio.');
        if (this.aventureTourismModalitiesField.invalid) errors.push('Las modalidades de aventureTourismModalities son obligatorias.');
        if (this.identificationField.invalid) errors.push('La identificación es obligatoria.');
        if (this.nameField.invalid) errors.push('El nombre es obligatorio.');
        if (this.rucField.invalid) errors.push('El RUC es obligatorio.');
        if (this.touristTransportCompaniesField.invalid) errors.push('Las empresas de transporte turístico son obligatorias.');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }
        return [];
    }

    loadData() {}

    get totalRoomsField() {
        return this.form.controls['totalRooms'];
    }

    get totalBedsField() {
        return this.form.controls['totalBeds'];
    }

    get totalPlacesField() {
        return this.form.controls['totalPlaces'];
    }

    get totalComplementaryServicesField() {
        return this.form.controls['totalComplementaryServices'];
    }

    get totalTablesField() {
        return this.form.controls['totalTables'];
    }

    get totalCapacitiesField() {
        return this.form.controls['totalCapacities'];
    }

    get aventureTourismModalitiesField() {
        return this.form.controls['aventureTourismModalities'];
    }

    get identificationField() {
        return this.form.controls['identification'];
    }

    get nameField() {
        return this.form.controls['name'];
    }

    get rucField() {
        return this.form.controls['ruc'];
    }

    get touristTransportCompaniesField() {
        return this.form.controls['touristTransportCompanies'];
    }
}
