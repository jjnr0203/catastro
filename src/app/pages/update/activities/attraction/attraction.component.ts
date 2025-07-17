import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { Dates_79_84Component } from '../../sections/dates-79-84/dates-79-84.component';
import { Dates_14_37Component } from '../../sections/dates-14-37/dates-14-37.component';
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { DividerModule } from 'primeng/divider';
import { AttraccionVariablesComponent } from '../../independent-variables/attraction/attraction-variables.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { ProcedureComponent } from '../../sections/procedure/procedure.component';

@Component({
    selector: 'app-attraction',
    imports: [Dates_79_84Component, Dates_14_37Component, ProcedureComponent, PanelModule, FluidModule, DividerModule, AttraccionVariablesComponent],
    templateUrl: './attraction.component.html',
    styleUrl: './attraction.component.scss'
})
export class AttractionComponent {
    protected readonly PrimeIcons = PrimeIcons;

    @ViewChildren(ProcedureComponent) private dates1_12Componet!: QueryList<ProcedureComponent>;
    @ViewChildren(Dates_14_37Component) private dates_14_37Componet!: QueryList<Dates_14_37Component>;
    @ViewChildren(AttraccionVariablesComponent) private attraccionVariablesComponet!: QueryList<AttraccionVariablesComponent>;
    @ViewChildren(Dates_79_84Component) private dates_79_84Componet!: QueryList<Dates_79_84Component>;

    private formBuilder = inject(FormBuilder);

    protected mainForm!: FormGroup;

    //protected readonly customMessageService = inject(CustomMessageService);

    constructor() {
        this.mainForm = this.formBuilder.group({});
    }

    saveForm(childForm: FormGroup) {
        Object.keys(childForm.controls).forEach((controlName) => {
            if (!this.mainForm.contains(controlName)) {
                this.mainForm.addControl(controlName, this.formBuilder.control(childForm.get(controlName)?.value));
            } else {
                this.mainForm.get(controlName)?.patchValue(childForm.get(controlName)?.value);
            }
        });
    }

    onSubmit() {
        if (!this.checkFormErrors()) {
            this.saveProcess();
        }
    }

    saveProcess() {
        console.log(this.mainForm.value);
    }

    checkFormErrors() {
        const errors: string[] = [
            ...this.dates1_12Componet.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_14_37Componet.toArray().flatMap((c) => c.getFormErrors()),
            ...this.attraccionVariablesComponet.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_79_84Componet.toArray().flatMap((c) => c.getFormErrors())
        ];

        if (errors.length > 0) {
            //this.customMessageService.showFormErrors(errors);
            return false;
        }

        return true;
    }
}
