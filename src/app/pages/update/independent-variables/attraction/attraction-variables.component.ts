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
    selector: 'app-attraccion-variables',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './attraction-variables.component.html',
    styleUrl: './attraction-variables.component.scss'
})
export class AttraccionVariablesComponent implements OnInit {
    @Input() data!: string | undefined;
    @Output() dataOut = new EventEmitter<FormGroup>();
    @Output() fieldErrorsOut = new EventEmitter<string[]>();

    private readonly formBuilder = inject(FormBuilder);
    /*  protected readonly customMessageService = inject(CustomMessageService); */
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
            totalCapacity: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]]
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

        if (this.totalRoomsField.invalid) errors.push('El tipo de local es obligatorio.');
        if (this.totalCapacityField.invalid) errors.push('La capacidad total es obligatoria.');
        if (this.aventureTourismModalitiesField.invalid) errors.push('Las modalidades de turismo de aventura son obligatorias.');

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

    get totalCapacityField() {
        return this.form.controls['localCapacity'];
    }

    get aventureTourismModalitiesField() {
        return this.form.controls['aventureTourismModalities'];
    }
}
