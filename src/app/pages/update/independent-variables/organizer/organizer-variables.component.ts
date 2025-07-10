import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fluid, FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { PrimeIcons } from 'primeng/api';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-organizer-variables',
    imports: [ReactiveFormsModule, FluidModule, InputTextModule, CustomLabelDirective],
    templateUrl: './organizer-variables.component.html',
    styleUrl: './organizer-variables.component.scss'
})
export class OrganizerVariablesComponent implements OnInit {
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

    buildForm() {
        this.form = this.formBuilder.group({
            localType: ['', [Validators.required]],
            totalCapacity: ['', [Validators.required]]
        });
        this.watchFormChanges();
    }

    ngOnInit() {
        this.loadData();
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

        if (this.localTypeField.invalid) errors.push('El tipo de local es obligatorio.');
        if (this.totalCapacityField.invalid) errors.push('La capacidad total es obligatoria.');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }
        return [];
    }

    loadData() {}

    get localTypeField() {
        return this.form.controls['localType'];
    }

    get totalCapacityField() {
        return this.form.controls['totalCapacity'];
    }
}
