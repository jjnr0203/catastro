import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../shared/directives/custom-label.directive';

@Component({
  selector: 'app-update-catastro',
  imports: [CardModule, FluidModule, InputTextModule, CustomLabelDirective, PanelModule, TagModule, IftaLabelModule, ButtonModule, TableModule],
  templateUrl: './update-catastro.component.html',
  styleUrl: './update-catastro.component.scss'
})
export class UpdateCatastroComponent {

}
