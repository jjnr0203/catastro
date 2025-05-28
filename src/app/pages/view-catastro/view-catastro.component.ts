import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-view-catastro',
  imports: [CardModule],
  templateUrl: './view-catastro.component.html',
  styleUrl: './view-catastro.component.scss'
})
export class ViewCatastroComponent {
    constructor() {}
}
