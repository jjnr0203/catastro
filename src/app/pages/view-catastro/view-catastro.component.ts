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


@Component({
  selector: 'app-view-catastro',
  imports: [CardModule, FluidModule, InputTextModule, CustomLabelDirective, PanelModule, TagModule, IftaLabelModule],
  templateUrl: './view-catastro.component.html',
  styleUrl: './view-catastro.component.scss'
})
export class ViewCatastroComponent {
  protected catastro : CatastroInterface = catastroData 
  constructor() {}
}
