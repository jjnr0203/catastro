import { Component, effect, EventEmitter, inject, Input, input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { SelectModule } from 'primeng/select';
import { PrimeIcons } from 'primeng/api';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-dates-1-12',
    imports: [ReactiveFormsModule, CustomLabelDirective, SelectModule, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule, SelectModule],
    templateUrl: './dates-1-12.component.html',
    styleUrl: './dates-1-12.component.scss'
})
export class Dates1_12Component implements OnInit {

    @Input() data!: string | undefined;
    @Output() dataOut = new EventEmitter<FormGroup>();
    @Output() fieldErrorsOut = new EventEmitter<string[]>();

    private readonly formBuilder = inject(FormBuilder);
    /* protected readonly customMessageService = inject(CustomMessageService); */
    protected readonly PrimeIcons = PrimeIcons;

    protected form!: FormGroup;
    
    showLocalType = input<boolean>(true);
    showLocalTypeEffect = effect(() => {
        if (!this.showLocalType()) {
            this.form.removeControl('localType');
            console.log('Type establishment control removed from form', this.form.controls);
        }
    });

    constructor() {
        this.buildForm();
    }

    ngOnInit() {
        this.loadData();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            ruc: ['', Validators.required],
            code: ['', Validators.required],
            stateRuc: ['', Validators.required], //review name variable
            tradeName: ['', [Validators.required]],
            registerNumber: ['', [Validators.required]],
            registeredAt: ['', [Validators.required]],
            activities: ['', [Validators.required]],
            sort: ['', [Validators.required]],
            categorie: ['', [Validators.required]],
            socialReason: ['', Validators.required], //review name variable
            legalName: ['', Validators.required],
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

        if(this.rucField.invalid) errors.push('Su ruc es.');
        if(this.codeField.invalid) errors.push('Codigo.')
        if(this.stateRucField.invalid) errors.push('Estado del RUC.');
        if(this.tradeNameField.invalid) errors.push('Nombre comercial.');
        if(this.registerNumberField.invalid) errors.push('Numero de registro.');
        if(this.registeredAtField.invalid) errors.push('Fecha de registro.');
        if(this.activitiesField.invalid) errors.push('Actividades.');
        if(this.sortField.invalid) errors.push('Orden.');
        if(this.categorieField.invalid) errors.push('Categoria.');
        if(this.socialReasonField.invalid) errors.push('Razón social.');
        if(this.legalNameField.invalid) errors.push('Nombre legal.');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }

        return [];
    }

    loadData() {}

    //Geters for form controls
    get rucField(): AbstractControl {
        return this.form.controls['ruc'];
    };

    get codeField(): AbstractControl {
        return this.form.controls['code'];
    };

    get stateRucField(): AbstractControl {
        return this.form.controls['stateRuc'];
    };

    get tradeNameField(): AbstractControl {
        return this.form.controls['tradeName'];
    };

    get registerNumberField(): AbstractControl {
        return this.form.controls['registerNumber'];
    };

    get registeredAtField(): AbstractControl {
        return this.form.controls['registeredAt'];
    };

    get activitiesField(): AbstractControl {
        return this.form.controls['activities'];
    };

    get sortField(): AbstractControl {
        return this.form.controls['sort'];
    };

    get categorieField(): AbstractControl {
        return this.form.controls['categorie'];
    };

    get socialReasonField(): AbstractControl {
        return this.form.controls['socialReason'];
    };

    get legalNameField(): AbstractControl {
        return this.form.controls['legalName'];
    };
}
