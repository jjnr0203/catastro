import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { SelectModule } from 'primeng/select';
import { PrimeIcons } from 'primeng/api';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-dates-14-37',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './dates-14-37.component.html',
    styleUrl: './dates-14-37.component.scss'
})
export class Dates_14_37Component implements OnInit {
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
            establishments: ['', Validators.required],
            name: ['', Validators.required],
            juridicalPersons: ['', Validators.required],
            legalStatus: ['', Validators.required],
            province: ['', [Validators.required]],
            canton: ['', [Validators.required]],
            parish: ['', [Validators.required]],
            parishType: ['', Validators.required],
            address: ['', Validators.required],
            referenceStreet: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            secondaryPhone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            webPage: ['', [Validators.required]],
            latitude: ['', [Validators.required]],
            longitude: ['', [Validators.required]],
            establishmentStatus: ['', Validators.required],
            systemOrigin: ['', Validators.required],
            hasDebt: ['', [Validators.required]],
            totalMen: ['', [Validators.required]],
            totalWomen: ['', [Validators.required]],
            totalMenDisability: ['', [Validators.required]],
            totalWomenDisability: ['', [Validators.required]],
            totalWorker: ['', Validators.required]
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
        if(this.establishmentsField.invalid) errors.push('Su Establecimiento es')

        if(this.nameField.invalid) errors.push('Nombre')

        if(this.juridicalPersonsField.invalid) errors.push('Tipo de Personería')

        if(this.legalStatusField.invalid) errors.push('Personería jurídica')

        if(this.provinceField.invalid) errors.push('Provincia')

        if(this.cantonField.invalid) errors.push('Cantón')

        if(this.parishField.invalid) errors.push('Parroquia')

        if(this.parishTypeField.invalid) errors.push('Tipo de parroquia')

        if(this.addressField.invalid) errors.push('Dirección')

        if(this.referenceStreetField.invalid) errors.push('Referencia de dirección')

        if(this.phoneField.invalid) errors.push('Teléfono principal ')

        if(this.secondaryPhoneField.invalid) errors.push('Teléfono secundario ')

        if(this.latitudeField.invalid) errors.push('Latitud')

        if(this.longitudeField.invalid) errors.push('Longitud')

        if(this.emailField.invalid) errors.push('Correo electrónico')

        if(this.webPageField.invalid) errors.push('Dirección Web')

        if(this.establishmentStatusField.invalid) errors.push('Estado Registro del establecimiento')

        if(this.systemOriginField.invalid) errors.push('Sistema de origen')

        if(this.hasDebtField.invalid) errors.push('Estado del Registro con deuda')

        if(this.totalMenField.invalid) errors.push('Total de trabajadores Hombres')

        if(this.totalWomenField.invalid) errors.push('Total de trabajadores Mujeres')

        if(this.totalMenDisabilityField.invalid) errors.push('Total de trabajadores Hombres con discapacidad')

        if(this.totalWomenDisabilityField.invalid) errors.push('Total de trabajadores Mujeres con discapacidad')

        if(this.totalWorker.invalid) errors.push('Total trabajadores ')

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }

        return [];
    }

    loadData() {}

    get establishmentsField(): AbstractControl {
        return this.form.controls['establishments'];
    }

    get nameField(): AbstractControl {
        return this.form.controls['name'];
    }

    get juridicalPersonsField(): AbstractControl {
        return this.form.controls['juridicalPersons'];
    }

    get legalStatusField(): AbstractControl {
        return this.form.controls['legalStatus'];
    }

    get provinceField(): AbstractControl {
        return this.form.controls['province'];
    }

    get cantonField(): AbstractControl {
        return this.form.controls['canton'];
    }

    get parishField(): AbstractControl {
        return this.form.controls['parish'];
    }

    get parishTypeField(): AbstractControl {
        return this.form.controls['parishType'];
    }

    get addressField(): AbstractControl {
        return this.form.controls['address'];
    }

    get referenceStreetField(): AbstractControl {
        return this.form.controls['referenceStreet'];
    }

    get phoneField(): AbstractControl {
        return this.form.controls['phone'];
    }

    get secondaryPhoneField(): AbstractControl {
        return this.form.controls['secondaryPhone'];
    }

    get latitudeField(): AbstractControl {
        return this.form.controls['latitude'];
    }

    get longitudeField(): AbstractControl {
        return this.form.controls['longitude'];
    }

    get emailField(): AbstractControl {
        return this.form.controls['email'];
    }

    get webPageField(): AbstractControl {
        return this.form.controls['webPage'];
    }

    get establishmentStatusField(): AbstractControl {
        return this.form.controls['establishmentStatus'];
    }

    get systemOriginField(): AbstractControl {
        return this.form.controls['systemOrigin'];
    }

    get hasDebtField(): AbstractControl {
        return this.form.controls['hasDebt'];
    }

    get totalMenField(): AbstractControl {
        return this.form.controls['totalMen'];
    }

    get totalWomenField(): AbstractControl {
        return this.form.controls['totalWomen'];
    }

    get totalMenDisabilityField(): AbstractControl {
        return this.form.controls['totalMenDisability'];
    }

    get totalWomenDisabilityField(): AbstractControl {
        return this.form.controls['totalWomenDisability'];
    }

    get totalWorker(): AbstractControl {
        return this.form.controls['totalWomenDisability'];
    }
}
