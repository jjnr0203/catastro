import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { PrimeIcons } from 'primeng/api';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-accommodation-variables',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './accommodation-variables.component.html',
    styleUrl: './accommodation-variables.component.scss'
})
export class AccommodationVariablesComponent implements OnInit {
    @Input() data!: string | undefined;
    @Output() dataOut = new EventEmitter<FormGroup>();
    @Output() fieldErrorsOut = new EventEmitter<string[]>();

    private readonly formBuilder = inject(FormBuilder);
    /* protected readonly _customMessageService = inject(CustomMessageService); */
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
            localTypeId: ['', [Validators.required]],
            totalRooms: ['', [Validators.required]],
            totalBeds: ['', [Validators.required]],
            totalPlaces: ['', [Validators.required]],
            totalCapacities: ['', [Validators.required]],
            rackYear: ['', [Validators.required]],
            declarationAt: ['', [Validators.required]],
            typesCapacities: ['', [Validators.required]], //review repeat
            quantityByTypeCapacity: ['', [Validators.required]],
            placesTypeCapacity: ['', [Validators.required]],
            rateTypeCapacity: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]]
            /* ctcActivities: ['', [Validators.required]], */ //Eliminar
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

        if (this.localTypeIdField.invalid) errors.push('Su local es');

        if (this.totalRoomsField.invalid) errors.push('Total Habitaciones');

        if (this.totalBedsField.invalid) errors.push('Total Camas');

        if (this.totalPlacesField.invalid) errors.push('Total Plazas');

        if (this.totalCapacitiesField.invalid) errors.push('Total capacidades servicios complementarios');

        if (this.rackYearField.invalid) errors.push('Año de declaración del tarifario rack');

        if (this.declarationAtField.invalid) errors.push('Fecha de declaración del tarifario rack');

        if (this.typesCapacitiesField.invalid) errors.push('Tipos capacidades');

        if (this.quantityByTypeCapacityField.invalid) errors.push('Cantidad por tipo de capacidad ');

        if (this.placesTypeCapacityField.invalid) errors.push('Plazas por tipo de capacidad ');

        if (this.rateTypeCapacityField.invalid) errors.push('Tarifa por tipo de capacidad');

        if (this.aventureTourismModalitiesField.invalid) errors.push('Modalidades de turismo aventura');

        /*  if (this.ctcActivitiesField.invalid) errors.push('Actividades permitidas CTC'); */

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }

        return [];
    }

    loadData() {}

    get localTypeIdField(): AbstractControl {
        return this.form.controls['localTypeId'];
    }

    get totalRoomsField(): AbstractControl {
        return this.form.controls['totalRooms'];
    }

    get totalBedsField(): AbstractControl {
        return this.form.controls['totalBeds'];
    }

    get totalPlacesField(): AbstractControl {
        return this.form.controls['totalPlaces'];
    }

    get totalCapacitiesField(): AbstractControl {
        return this.form.controls['totalCapacities'];
    }

    get rackYearField(): AbstractControl {
        return this.form.controls['rackYear'];
    }

    get declarationAtField(): AbstractControl {
        return this.form.controls['declarationAt'];
    }

    get typesCapacitiesField(): AbstractControl {
        return this.form.controls['typesCapacities'];
    }

    get quantityByTypeCapacityField(): AbstractControl {
        return this.form.controls['quantityByTypeCapacity'];
    }

    get placesTypeCapacityField(): AbstractControl {
        return this.form.controls['placesTypeCapacity'];
    }

    get rateTypeCapacityField(): AbstractControl {
        return this.form.controls['rateTypeCapacity'];
    }

    get aventureTourismModalitiesField(): AbstractControl {
        return this.form.controls['aventureTourismModalities'];
    }

    /*  get ctcActivitiesField(): AbstractControl {
        return this.form.controls['ctcActivities'];
    } */
}
