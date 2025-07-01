import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-guidance-variables',
  imports: [],
  templateUrl: './guidance-variables.component.html',
  styleUrl: './guidance-variables.component.scss'
})
export class GuidanceVariablesComponent {
    protected form!: FormGroup;
    protected formBuilder = inject(FormBuilder);

    constructor() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            code: ['', [Validators.required]],
            issueAt: ['', [Validators.required]],
            expirationAt: ['', [Validators.required]],
        });
    }

}
