import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { Dates_14_37Component } from '../../sections/dates-14-37/dates-14-37.component';
import { Dates_79_84Component } from '../../sections/dates-79-84/dates-79-84.component';
import { FluidModule } from 'primeng/fluid';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { TransportVariablesComponent } from '../../independent-variables/transport/transport-variables.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { ProcedureComponent } from '../../sections/procedure/procedure.component';

@Component({
    selector: 'app-transport',
    imports: [ProcedureComponent, Dates_14_37Component, Dates_79_84Component, FluidModule, PanelModule, DividerModule, TransportVariablesComponent],
    templateUrl: './transport.component.html',
    styleUrl: './transport.component.scss'
})
export class TransportComponent {
    protected readonly PrimeIcons = PrimeIcons;

    @ViewChildren(ProcedureComponent) private ProcedureComponent!: QueryList<ProcedureComponent>;
    @ViewChildren(Dates_14_37Component) private dates_14_37Component!: QueryList<Dates_14_37Component>;
    @ViewChildren(TransportVariablesComponent) private transportVariablesComponent!: QueryList<TransportVariablesComponent>;
    @ViewChildren(Dates_79_84Component) private dates_79_84Component!: QueryList<Dates_79_84Component>;

    private formBuilder = inject(FormBuilder);

    protected mainForm!: FormGroup;

    //protected readonly customMessageService = inject(CustomMessageService);

    constructor() {
        this.mainForm = this.formBuilder.group({});
    }

    saveForm(childForm: FormGroup) {
        Object.keys(childForm.controls).forEach(controlName => {
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
            ...this.ProcedureComponent.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_14_37Component.toArray().flatMap((c) => c.getFormErrors()),
            ...this.transportVariablesComponent.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_79_84Component.toArray().flatMap((c) => c.getFormErrors()),
        ];

        if (errors.length > 0) {
            //this.customMessageService.showFormErrors(errors);
            return false;
        }

        return true;
    }
}
