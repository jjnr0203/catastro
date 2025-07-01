import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { PrimeIcons } from 'primeng/api';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-food-variables',
    imports: [ReactiveFormsModule, CustomLabelDirective, SelectModule, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule, SelectModule],
    templateUrl: './food-variables.component.html',
    styleUrl: './food-variables.component.scss'
})
export class FoodVariablesComponent implements OnInit {
    @Input() data!: string | undefined;
    @Output() dataOut = new EventEmitter<FormGroup>();
    @Output() fieldErrorsOut = new EventEmitter<string[]>();

    protected readonly PrimeIcons = PrimeIcons;
    private readonly formBuilder = inject(FormBuilder);
    //protected readonly customMessageService = inject(CustomMessageService);

    protected form!: FormGroup;

    constructor() {
        this.buildForm();
    }

    ngOnInit() {
        this.loadData();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            totalTables: ['', [Validators.required]],
            totalCapacities: ['', [Validators.required]],
            // kitchenTypes: ['', [Validators.required]],
            serviceType: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]]
            //ctcActivities: ['', [Validators.required]] //delete
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

        if (this.totalTablesField.invalid) errors.push('El total de mesas es obligatorio.');
        if (this.totalCapacitiesField.invalid) errors.push('El total de capacidades es obligatorio.');
        if (this.serviceTypeField.invalid) errors.push('El tipo de servicio es obligatorio.');
        if (this.aventureTourismModalitiesField.invalid) errors.push('Las modalidades de turismo de aventura son obligatorias.');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }
        return [];
    }

    loadData() {}

    get totalTablesField(): AbstractControl {
        return this.form.controls['totalTables'];
    }

    get totalCapacitiesField(): AbstractControl {
        return this.form.controls['totalCapacities'];
    }

    /* get kitchenTypes(): AbstractControl {
        return this.form.controls['kitchenTypes'];
    } */

    get serviceTypeField(): AbstractControl {
        return this.form.controls['serviceType'];
    }

    get aventureTourismModalitiesField(): AbstractControl {
        return this.form.controls['aventureTourismModalities'];
    }

    get ctcActivitiesField(): AbstractControl {
        return this.form.controls['ctcActivities'];
    }
}
