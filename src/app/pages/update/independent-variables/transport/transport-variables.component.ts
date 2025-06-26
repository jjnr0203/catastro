import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-transport-variables',
  imports: [ReactiveFormsModule, FluidModule],
  templateUrl: './transport-variables.component.html',
  styleUrl: './transport-variables.component.scss'
})
export class TransportVariablesComponent {

  protected form! : FormGroup;
  protected formBuilder = inject(FormBuilder);

  constructor(){
    this.transportForm();
  }

  transportForm(){
    this.form = this.formBuilder.group({
      enablingTitle : ['', [Validators.required]],
      dateTitleAddition : ['', [Validators.required]],
      dateExpirationTitle : ['', [Validators.required]],
      typeVehicle : ['', [Validators.required]],
      enroll : ['', [Validators.required]],
      registrationDate : ['', [Validators.required]],
      registrationExpirationDate : ['', [Validators.required]],
      unitCapacity : ['', [Validators.required]],
      totalVehicles : ['', [Validators.required]],
      totalVehicleSeat : ['', [Validators.required]],
      typeTransportLocation : ['', [Validators.required]],
      typeBoats : ['', [Validators.required]],
      boatModality : ['', [Validators.required]],
      enrollBoats : ['', [Validators.required]],
      totalBoatCapacities : ['', [Validators.required]],
    })
  }
}
