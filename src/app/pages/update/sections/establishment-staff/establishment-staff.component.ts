import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { distinctUntilChanged } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-establishment-staff',
  imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, InputNumber, TagModule, CustomLabelDirective, SelectModule],
  templateUrl: './establishment-staff.component.html',
  styleUrl: './establishment-staff.component.scss'
})
export class EstablishmentStaffComponent  implements OnInit {
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
      totalMen: ['1', Validators.required],
      totalWomen: ['1', Validators.required],
      totalMenDisability: ['1', Validators.required],
      totalWomenDisability: ['', Validators.required],
    
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
    if (this.totalMenField.invalid) errors.push('Su Establecimiento es');
    if (this.totalWomenField.invalid) errors.push('Su Establecimiento es');
    if (this.totalMenDisabilityField.invalid) errors.push('Su Establecimiento es');    
    if (this.totalWomenDisabilityField.invalid) errors.push('Su Establecimiento es');

    if (errors.length > 0) {
            this.form.markAllAsTouched();
            return errors;
        }

        return [];
    }

    loadData() {}

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
}
