import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { Dates1_12Component } from '../../dates/dates-1-12/dates-1-12.component';
import { Dates_14_37Component } from '../../dates/dates-14-37/dates-14-37.component';
import { Dates_79_84Component } from '../../dates/dates-79-84/dates-79-84.component';
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { DividerModule } from 'primeng/divider';
import { CommunityVariablesComponent } from '../../independent-variables/community/community-variables.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-community',
    imports: [Dates1_12Component, Dates_14_37Component, Dates_79_84Component, PanelModule, FluidModule, DividerModule, CommunityVariablesComponent],
    templateUrl: './community.component.html',
    styleUrl: './community.component.scss'
})
export class CommunityComponent {
    protected readonly PrimeIcons = PrimeIcons;

    @ViewChildren(Dates1_12Component) private dates1_12Componet!: QueryList<Dates1_12Component>;
    @ViewChildren(Dates_14_37Component) private dates_14_37Componet!: QueryList<Dates_14_37Component>;
    @ViewChildren(CommunityVariablesComponent) private communityVariablesComponet!: QueryList<CommunityVariablesComponent>;
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
            ...this.communityVariablesComponet.toArray().flatMap((c) => c.getFormErrors()),
            ...this.dates_79_84Componet.toArray().flatMap((c) => c.getFormErrors())
        ];

        if (errors.length > 0) {
            //this.customMessageService.showFormErrors(errors);
            return false;
        }

        return true;
    }
}
