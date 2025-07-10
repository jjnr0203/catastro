import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    selector: 'app-agency-variables',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './agency-variables.component.html',
    styleUrl: './agency-variables.component.scss'
})
export class AgencyVariablesComponent implements OnInit {
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
            permanentPhysicalSpace: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]],
            identification: ['', [Validators.required]],
            name: ['', [Validators.required]],
            ruc: ['', [Validators.required]],
            touristTransportCompanies: ['', [Validators.required]],
            salesRepresentatives: ['', [Validators.required]],
            legalName: ['', [Validators.required]]
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

        if (this.permanentPhysicalSpaceField.invalid) errors.push('El espacio físico permanente es obligatorio.');
        if (this.aventureTourismModalitiesField.invalid) errors.push('Las modalidades de turismo de aventura son obligatorias.');
        if (this.identificationField.invalid) errors.push('La identificación es obligatoria.');
        if (this.nameField.invalid) errors.push('El nombre es obligatorio.');
        if (this.rucField.invalid) errors.push('El RUC es obligatorio.');
        if (this.touristTransportCompaniesField.invalid) errors.push('Las empresas de transporte turístico son obligatorias.');
        if (this.salesRepresentativesField.invalid) errors.push('Los representantes de ventas son obligatorios.');
        if (this.legalNameField.invalid) errors.push('El nombre legal es obligatorio.');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }

        return [];
    }

    loadData() {}

    get permanentPhysicalSpaceField(): AbstractControl {
        return this.form.controls['permanentPhysicalSpaceId'];
    }

    get aventureTourismModalitiesField(): AbstractControl {
        return this.form.controls['aventureTourismModalities'];
    }

    get identificationField(): AbstractControl {
        return this.form.controls['identification'];
    }

    get nameField(): AbstractControl {
        return this.form.controls['name'];
    }

    get rucField(): AbstractControl {
        return this.form.controls['ruc'];
    }

    get touristTransportCompaniesField(): AbstractControl {
        return this.form.controls['touristTransportCompanies'];
    }

    get salesRepresentativesField(): AbstractControl {
        return this.form.controls['sales_representatives'];
    }

    get legalNameField(): AbstractControl {
        return this.form.controls['legalName'];
    }
}
