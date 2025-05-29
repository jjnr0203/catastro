import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { CustomLabelDirective } from '../../shared/directives/custom-label.directive';
import { PanelModule } from 'primeng/panel';
import { CatastroInterface } from './interfaces/catastro.interface';
import { catastroData } from './data';
import { TagModule } from 'primeng/tag';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-view-catastro',
    imports: [CardModule, FluidModule, InputTextModule, CustomLabelDirective, PanelModule, TagModule, IftaLabelModule, ButtonModule, TableModule],
    templateUrl: './view-catastro.component.html',
    styleUrl: './view-catastro.component.scss'
})
export class ViewCatastroComponent {
    protected catastro: CatastroInterface = catastroData;

    constructor() {}

    dataPerson = [
        {
            ruc: 1720000001001,
            nombre: 'Carlos Pérez',
            identificacion: '20231002',
            razon: 'Revisión Inicial',
            titulo: 'Asignado para revisión de apertura.',
            contrato: 'Asignado para revisión de apertura.',
            experiencia: 'Asignado para revisión de apertura.',
            guia: 'Si'
        }
    ];
}
