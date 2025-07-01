import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { Dates1_12Component } from '../../dates/dates-1-12/dates-1-12.component';
import { Dates_14_37Component } from '../../dates/dates-14-37/dates-14-37.component';
import { Dates_79_84Component } from '../../dates/dates-79-84/dates-79-84.component';
import { FluidModule } from 'primeng/fluid';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { TransportVariablesComponent } from '../../independent-variables/transport/transport-variables.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-transport',
    imports: [Dates1_12Component, Dates_14_37Component, Dates_79_84Component, FluidModule, PanelModule, DividerModule, TransportVariablesComponent],
    templateUrl: './transport.component.html',
    styleUrl: './transport.component.scss'
})
export class TransportComponent {
    protected readonly PrimeIcons = PrimeIcons;

    @ViewChildren(Dates1_12Component) private dates1_12Component!: QueryList<Dates1_12Component>;
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
            ...this.dates1_12Component.toArray().flatMap((c) => c.getFormErrors()),
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
