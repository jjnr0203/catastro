import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';
import { UpdateCatastroComponent } from '../../update-catastro.component';

@Component({
  selector: 'app-dates-1-11',
  imports: [ReactiveFormsModule, CustomLabelDirective, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule],
  templateUrl: './dates-1-11.component.html',
  styleUrl: './dates-1-11.component.scss'
})
export class Dates1_11Component {
  protected form!: FormGroup;
  protected formBuilder = inject(FormBuilder);

    constructor() {
        this.acomodationForm();
    }

    acomodationForm() {
        this.form = this.formBuilder.group({
            ruc: ['', Validators.required],
            establishmentCode: ['', Validators.required],
            stateRuc: ['', Validators.required],
            commercialName: ['', Validators.required],
            registrationNumber: ['', Validators.required],
            registrationDate: ['', Validators.required],
            ativitiy: ['', Validators.required],
            clasification: ['', Validators.required],
            category: ['', Validators.required],
            socialReason: ['', Validators.required],
            legalRepresentative: ['', Validators.required]
        });
    }

    //Geters for form controls
    get rucField(): AbstractControl {
        return this.form.controls['ruc'];
    }

    get establishmentCodeField(): AbstractControl {
        return this.form.controls['establishmentCode'];
    }

    get stateRucField(): AbstractControl {
        return this.form.controls['stateRuc'];
    }

    get commercialNameField(): AbstractControl {
        return this.form.controls['commercialName'];
    }

    get registrationNumberField(): AbstractControl {
        return this.form.controls['registrationNumber'];
    }

    get registrationDateField(): AbstractControl {
        return this.form.controls['registrationDate'];
    }

    get ativitiyField(): AbstractControl {
        return this.form.controls['ativitiy'];
    }

    get clasificationField(): AbstractControl {
        return this.form.controls['clasification'];
    }

    get categoryField(): AbstractControl {
        return this.form.controls['category'];
    }

    get socialReasonField(): AbstractControl {
        return this.form.controls['socialReason'];
    }

    get legalRepresentativeField(): AbstractControl {
        return this.form.controls['legalRepresentative'];
    }

}
