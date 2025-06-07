import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CustomLabelDirective } from '../../shared/directives/custom-label.directive';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catastroData } from './data';
import { CatastroInterface } from './interfaces/catastro.interface';

@Component({
    selector: 'app-update-catastro',
    imports: [CardModule, ReactiveFormsModule, FluidModule, InputTextModule, CustomLabelDirective, PanelModule, TagModule, IftaLabelModule, ButtonModule, TableModule],
    templateUrl: './update-catastro.component.html',
    styleUrl: './update-catastro.component.scss'
})
export class UpdateCatastroComponent {

    protected catastro: CatastroInterface = catastroData;
    protected formbuilder = inject(FormBuilder);
    protected form!: FormGroup;
    
    constructor() {
        this.buildform();
    }

    buildform() {
        this.form = this.formbuilder.group({
          registerNumber: ['1720446846001', [Validators.required]],
          registerDate : ['20/02/2013', [Validators.required]],
          registerState: ['Ratificado', [Validators.required]],
          activities: ['Agenciamiento Turístico', [Validators.required]],
          classification: ['Agencia de Viajes', [Validators.required]],
          categorie: ['Categoría Uníca', [Validators.required]],
          debt : ['', [Validators.required]],
          isLocal: ['', [Validators.required]],
          personeriaType : ['', [Validators.required]],
          number: ['', [Validators.required]],
          comercialName: ['', [Validators.required]],
          webApp: ['', [Validators.required]],
          state: ['', [Validators.required]],
          province : ['', [Validators.required]],
          canton: ['', [Validators.required]],
          parroquial: ['', [Validators.required]],
          princialStreet: ['', [Validators.required]],
          numeration: ['', [Validators.required]],
          intersectionStreet: ['', [Validators.required]],
          referenceUbication: ['', [Validators.required]],
          latitude: ['', [Validators.required]],
          longitude: ['', [Validators.required]],
          identityCard: ['', [Validators.required]],
          civilRegisterData: ['', [Validators.required]],
          emailProprietary: ['', [Validators.required, Validators.email]],
          phonePrincipal: ['', [Validators.required]],
          phoneSecondary: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          menTotal: ['', [Validators.required]],
          disabledMen: ['', [Validators.required]],
          womenTotal: ['', [Validators.required]],
          disabledWomen: ['', [Validators.required]],
        });
      }

      get registerNumberField(): AbstractControl {
        return this.form.controls['registerNumber'];
      }

      get registerDateField(): AbstractControl {
        return this.form.controls['registerDate'];
      }

      get registerStateField(): AbstractControl {
        return this.form.controls['registerState'];
      }

      get activitiesField(): AbstractControl {
        return this.form.controls['activities'];
      }

      get classificationField(): AbstractControl {
        return this.form.controls['classification'];
      }

      get categorieFieldField(): AbstractControl {
        return this.form.controls['categorie'];
      }

      get debtField(): AbstractControl {
        return this.form.controls['debt'];
      }

      get isLocalField(): AbstractControl {
        return this.form.controls['isLocal'];
      }

      get personeriaTypeField(): AbstractControl {
        return this.form.controls['personeriaType'];
      }

      get numberField(): AbstractControl {
        return this.form.controls['number'];
      }

      get comercialNameField(): AbstractControl {
        return this.form.controls['comercialName'];
      }

      get webAppField(): AbstractControl {
        return this.form.controls['webApp'];
      }

      get stateField(): AbstractControl {
        return this.form.controls['state'];
      }

      get provinceField(): AbstractControl {
        return this.form.controls['province'];
      }

      get cantonField(): AbstractControl {
        return this.form.controls['canton'];
      }

      get parroquialField(): AbstractControl {
        return this.form.controls['parroquial'];
      }

      get princialStreetField(): AbstractControl {
        return this.form.controls['princialStreet'];
      }

      get numerationField(): AbstractControl {
        return this.form.controls['numeration'];
      }

      get intersectionStreetField(): AbstractControl {
        return this.form.controls['intersectionStreet'];
      }

      get referenceUbicationField(): AbstractControl {
        return this.form.controls['referenceUbication'];
      }

      get latitudeField(): AbstractControl {
        return this.form.controls['latitude'];
      }

      get longitudeField(): AbstractControl {
        return this.form.controls['longitude'];
      }

      get identityCardField(): AbstractControl {
        return this.form.controls['identityCard'];
      }

      get civilRegisterDataField(): AbstractControl {
        return this.form.controls['civilRegisterData'];
      }

      get emailProprietaryField(): AbstractControl {
        return this.form.controls['emailProprietary'];
      }

      get phonePrincipalField(): AbstractControl {
        return this.form.controls['phonePrincipal'];
      }

      get phoneSecondaryField(): AbstractControl {
        return this.form.controls['phoneSecondary'];
      }

      get emailField(): AbstractControl {
        return this.form.controls['email'];
      }

      get menTotalField(): AbstractControl {
        return this.form.controls['menTotal'];
      }

      get disabledMenField(): AbstractControl {
        return this.form.controls['disabledMen'];
      }

      get womenTotalField(): AbstractControl {
        return this.form.controls['womenTotal'];
      }

      get disabledWomenField(): AbstractControl {
        return this.form.controls['disabledWomen'];
      }
}
