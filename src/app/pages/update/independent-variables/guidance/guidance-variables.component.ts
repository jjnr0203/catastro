import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
    selector: 'app-guidance-variables',
    imports: [ReactiveFormsModule, CustomLabelDirective, SelectModule, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule, SelectModule],
    templateUrl: './guidance-variables.component.html',
    styleUrl: './guidance-variables.component.scss'
})
export class GuidanceVariablesComponent implements OnInit {
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
            code: ['', [Validators.required]],
            issueAt: ['', [Validators.required]],
            expirationAt: ['', [Validators.required]]
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

        if (this.codeField.invalid) errors.push('El código es obligatorio.');
        if (this.issueAtField.invalid) errors.push('La fecha de emisión es obligatoria.');
        if (this.expirationAtField.invalid) errors.push('La fecha de expiración es obligatoria.');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }

        return [];
    }

    loadData() {}

    get codeField(): AbstractControl {
        return this.form.controls['code'];
    }

    get issueAtField(): AbstractControl {
        return this.form.controls['issueAt'];
    }

    get expirationAtField(): AbstractControl {
        return this.form.controls['expirationAt'];
    }
}
