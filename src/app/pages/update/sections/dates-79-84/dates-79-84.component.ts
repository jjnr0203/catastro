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
    selector: 'app-dates-79-84',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './dates-79-84.component.html',
    styleUrl: './dates-79-84.component.scss'
})
export class Dates_79_84Component implements OnInit {
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
            name: ['', Validators.required],
            email: ['', Validators.required],
            state: ['', Validators.required],
            observation: ['', Validators.required]
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

        if(this.nameField.invalid) errors.push('Su nombre es obligatorio.');
        if(this.emailField.invalid) errors.push('Su correo electrónico es obligatorio.');
        if(this.typeField.invalid) errors.push('El tipo de procedimiento es obligatorio.');
        if(this.registeredAtField.invalid) errors.push('La fecha de procesamiento es obligatoria.');
        if(this.stateField.invalid) errors.push('El sistema de modificación es obligatorio.');
        if(this.observationField.invalid) errors.push('La observación es obligatoria.');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }

        return [];
    }

    loadData() {}

    get nameField(): AbstractControl {
        return this.form.controls['name'];
    }

    get emailField(): AbstractControl {
        return this.form.controls['email'];
    }

    get typeField(): AbstractControl {
        return this.form.controls['type'];
    }

    get registeredAtField(): AbstractControl {
        return this.form.controls['registeredAt'];
    }

    get stateField(): AbstractControl {
        return this.form.controls['systemModication'];
    }

    get observationField(): AbstractControl {
        return this.form.controls['observation'];
    }
}
