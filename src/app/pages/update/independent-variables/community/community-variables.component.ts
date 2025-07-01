import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
    selector: 'app-community-variables',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, CustomLabelDirective, SelectModule],
    templateUrl: './community-variables.component.html',
    styleUrl: './community-variables.component.scss'
})
export class CommunityVariablesComponent {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            totalRooms: ['', [Validators.required]],
            totalBeds: ['', [Validators.required]],
            totalPlaces: ['', [Validators.required]],
            totalComplementaryServices: ['', [Validators.required]],
            totalTables: ['', [Validators.required]],
            totalCapacities: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]],
            //ctcActivities: ['', [Validators.required]], //delete
            identification: ['', [Validators.required]],
            name: ['', [Validators.required]],
            ruc: ['', [Validators.required]],
            touristTransportCompanies: ['', [Validators.required]]
        });
    }

    get totalRoomsField() {
        return this.form.controls['totalRooms'];
    }

    get totalBedsField() {
        return this.form.controls['totalBeds'];
    }

    get totalPlacesField() {
        return this.form.controls['totalPlaces'];
    }

    get totalComplementaryServicesField() {
        return this.form.controls['totalComplementaryServices'];
    }

    get totalTablesField() {
        return this.form.controls['totalTables'];
    }

    get totalCapacitiesField() {
        return this.form.controls['totalCapacities'];
    }

    get aventureTourismModalitiesField() {
        return this.form.controls['aventureTourismModalities'];
    }

    /* get ctcActivitiesField() {
        return this.form.controls['ctcActivities'];
    } */

    get identificationField() {
        return this.form.controls['identification'];
    }

    get nameField() {
        return this.form.controls['name'];
    }

    get rucField() {
        return this.form.controls['ruc'];
    }

    get touristTransportCompaniesField() {
        return this.form.controls['touristTransportCompanies'];
    }
}
