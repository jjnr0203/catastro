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
            localTypeId: ['', [Validators.required]],
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
        return [];
    }

    loadData() {}

    get localTypeId() {
        return this.form.get('localType');
    }

    get totalCapacityField() {
        return this.form.controls['localTypeId'];
    }

    get aventureTourismModalities() {
        return this.form.controls['localTypeId']
    }
}
