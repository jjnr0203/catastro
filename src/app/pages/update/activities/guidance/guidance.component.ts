import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { Dates1_12Component } from '../../dates/dates-1-12/dates-1-12.component';
import { Dates_14_37Component } from '../../dates/dates-14-37/dates-14-37.component';
import { Dates_79_84Component } from '../../dates/dates-79-84/dates-79-84.component';
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { DividerModule } from 'primeng/divider';
import { GuidanceVariablesComponent } from '../../independent-variables/guidance/guidance-variables.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-guidance',
    imports: [Dates1_12Component, Dates_14_37Component, Dates_79_84Component, PanelModule, FluidModule, DividerModule, GuidanceVariablesComponent],
    templateUrl: './guidance.component.html',
    styleUrl: './guidance.component.scss'
})
export class GuidanceComponent {
    protected readonly PrimeIcons = PrimeIcons;

    @ViewChildren(Dates1_12Component) private dates1_12Component!: QueryList<Dates1_12Component>;
    @ViewChildren(Dates_14_37Component) private dates_14_37Component!: QueryList<Dates_14_37Component>;
    @ViewChildren(GuidanceVariablesComponent) private guidanceVariablesComponent!: QueryList<GuidanceVariablesComponent>;
    @ViewChildren(Dates_79_84Component) private dates_79_84Component!: QueryList<Dates_79_84Component>;

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
            ...this.dates1_12Component.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_14_37Component.toArray().flatMap((c) => c.getFormErrors()),
            ...this.guidanceVariablesComponent.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_79_84Component.toArray().flatMap((c) => c.getFormErrors())
        ];

        if (errors.length > 0) {
            //this.customMessageService.showFormErrors(errors);
            return false;
        }

        return true;
    }
}
