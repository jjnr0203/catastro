import { Component, inject } from '@angular/core';
import { UpdateCatastroComponent } from '../../update-catastro.component';
import { PanelModule } from 'primeng/panel';
import { FluidModule } from 'primeng/fluid';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Dates1_11Component } from '../../dates/dates-1-11/dates-1-11.component';

@Component({
    selector: 'app-acomodation',
    imports: [ReactiveFormsModule, Dates1_11Component, UpdateCatastroComponent, PanelModule, FluidModule, InputTextModule, InputNumberModule, CardModule, TagModule],
    templateUrl: './acomodation.component.html',
    styleUrl: './acomodation.component.scss'
})
export class AcomodationComponent {
    
}
