import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { ViewCatastroComponent } from './view-catastro/view-catastro.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'view-catastro', component: ViewCatastroComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
