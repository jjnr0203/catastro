import { Component, effect, EventEmitter, inject, Input, input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
  selector: 'app-cadastre',
  imports: [
    ReactiveFormsModule, 
    CustomLabelDirective, 
    SelectModule, 
    PanelModule, 
    FluidModule, 
    InputTextModule, 
    InputNumberModule, 
    CardModule, 
    TagModule, 
    SelectModule, 
    DatePickerModule],
  templateUrl: './cadastre.component.html',
  styleUrl: './cadastre.component.scss'
})
export class CadastreComponent implements OnInit{

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
            registerNumber: ['213', [Validators.required]],
            registeredAt: ['123', [Validators.required]],
            state: ['', Validators.required], //review name variable
        });

        this.watchFormChanges();
    }

    watchFormChanges() {
        this.form.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((_) => {
            if (this.form.valid) {
                this.dataOut.emit(this.form);
            }
             console.log('Form changes detected:', this.form.value);
        });
    }

    getFormErrors(): string[] {
        const errors: string[] = [];

        if(this.registerNumberField.invalid) errors.push('Número de registro.');
        if(this.registeredAtField.invalid) errors.push('Fecha de Registro.');
        if(this.stateField.invalid) errors.push('Estado.');

        if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }

        return [];
    }

    loadData() {}

    //Geters for form controls
    get registerNumberField(): AbstractControl {
        return this.form.controls['númeor de registro'];
    };

    get registeredAtField(): AbstractControl {
        return this.form.controls['fecha de registro'];
    }; 

    get stateField(): AbstractControl {
        return this.form.controls['estado'];
    };

}
