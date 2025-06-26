import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { CustomLabelDirective } from '../../../../shared/directives/custom-label.directive';

@Component({
    selector: 'app-accommodation-variables',
    imports: [ReactiveFormsModule, PanelModule, InputTextModule, FluidModule, CardModule, TagModule, 
        CustomLabelDirective, SelectModule],
    templateUrl: './accommodation-variables.component.html',
    styleUrl: './accommodation-variables.component.scss'
})
export class AccommodationVariablesComponent{
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
      this.accomodationForm();
    }

    accomodationForm() {
        this.form = this.formBuilder.group({
            totalRooms: ['', [Validators.required]],
            totalBeds: ['', [Validators.required]],
            totalPlaces: ['', [Validators.required]],
            totalComplementaryServices: ['', [Validators.required]],
            yearStatementRackTariff: ['', [Validators.required]],
            declarationDateRack: ['', [Validators.required]],
            typesCapacities: ['', [Validators.required]],
            quantityByTypeCapacity: ['', [Validators.required]],
            placesTypeCapacity: ['', [Validators.required]],
            rateTypeCapacity: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]],
            permittedActivities: ['', [Validators.required]],        
        });
    }



    get totalRooms(): AbstractControl {
        return this.form.controls['totalRooms'];
    }

    get totalBeds(): AbstractControl {
        return this.form.controls['totalBeds'];
    }

    get totalPlaces(): AbstractControl {
        return this.form.controls['totalPlaces'];
    }

    get totalComplementaryServices(): AbstractControl {
        return this.form.controls['totalComplementaryServices'];
    }

    get yearStatementRackTariff(): AbstractControl {
        return this.form.controls['yearStatementRackTariff'];
    }

    get declarationDateRack(): AbstractControl {
        return this.form.controls['declarationDateRack'];
    }

    get typesCapacities(): AbstractControl {
        return this.form.controls['typesCapacities'];
    }

    get quantityByTypeCapacity(): AbstractControl {
        return this.form.controls['quantityByTypeCapacity'];
    }

    get placesTypeCapacity(): AbstractControl {
        return this.form.controls['placesTypeCapacity'];
    }

    get rateTypeCapacity(): AbstractControl {
        return this.form.controls['rateTypeCapacity'];
    }

    get aventureTourismModalities(): AbstractControl {
        return this.form.controls['aventureTourismModalities'];
    }

    get permittedActivities(): AbstractControl {
        return this.form.controls['permittedActivities'];
    }
}
