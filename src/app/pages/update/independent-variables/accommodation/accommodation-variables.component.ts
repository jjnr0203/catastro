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
      this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            localTypeId: ['', [Validators.required]],
            totalRooms: ['', [Validators.required]],
            totalBeds: ['', [Validators.required]],
            totalPlaces: ['', [Validators.required]],
            totalCapacities: ['', [Validators.required]],
            rackYear: ['', [Validators.required]],
            declarationAt: ['', [Validators.required]],
            typesCapacities: ['', [Validators.required]], //review repeat
            quantityByTypeCapacity: ['', [Validators.required]],
            placesTypeCapacity: ['', [Validators.required]],
            rateTypeCapacity: ['', [Validators.required]],
            aventureTourismModalities: ['', [Validators.required]],
            ctcActivities: ['', [Validators.required]],  //Eliminar    
        });
    }

    get localTypeIdField(): AbstractControl {
        return this.form.controls['localTypeId'];
    }

    get totalRoomsField(): AbstractControl {
        return this.form.controls['totalRooms'];
    }

    get totalBedsField(): AbstractControl {
        return this.form.controls['totalBeds'];
    }

    get totalPlacesField(): AbstractControl {
        return this.form.controls['totalPlaces'];
    }

    get totalCapacitiesField(): AbstractControl {
        return this.form.controls['totalCapacities'];
    }

    get rackYearField(): AbstractControl {
        return this.form.controls['rackYear'];
    }

    get declarationAtField(): AbstractControl {
        return this.form.controls['declarationAt'];
    }

    get typesCapacitiesField(): AbstractControl {
        return this.form.controls['typesCapacities'];
    }

    get quantityByTypeCapacityField(): AbstractControl {
        return this.form.controls['quantityByTypeCapacity'];
    }

    get placesTypeCapacityField(): AbstractControl {
        return this.form.controls['placesTypeCapacity'];
    }

    get rateTypeCapacityField(): AbstractControl {
        return this.form.controls['rateTypeCapacity'];
    }

    get aventureTourismModalitiesField(): AbstractControl {
        return this.form.controls['aventureTourismModalities'];
    }

    get ctcActivitiesField(): AbstractControl {
        return this.form.controls['ctcActivities'];
    }
}
