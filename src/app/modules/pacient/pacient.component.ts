import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { PacientService } from '../../service/pacient/pacient.service';
import {PacientRequest} from "../../model/pacient/PacientRequest";

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.scss']
})
export class PacientComponent {
  isLoading = false;
  public pacientForm = this.formBuilder.group({
    username: ['Gabriel', Validators.required],
    email: ['gabriel@email.com', Validators.required],
    address: ['qnj 32 22', Validators.required],
    uf: ['DF', Validators.required],
    phone: ['61982429000', Validators.required],
    birth: ['2024-02-05', [Validators.required, this.dateValidator]],
    gender: ['MASCULINO', Validators.required],
    profession: ['Vagabundo', Validators.required],
  });
  constructor(private formBuilder: FormBuilder,
              private pacientService: PacientService
  ) {
  }
  dateValidator(control: AbstractControl) {
    const dateString = control.value;
    if (dateString) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(dateString)) {
        return {invalidFormat: true};
      }
    }
    return null;
  }

  handlePacientForm(): void {
    if (this.pacientForm?.value && this.pacientForm.valid) {
      this.isLoading = true
      const requestPacient = this.pacientForm.value as PacientRequest
      this.pacientService.createPacient(requestPacient)
        .subscribe({
          next: (response) => {
            if(response){
              this.isLoading = false;
              console.log("Foi", response)
            }
          },
          error :(err) =>{
            console.log(err)
            this.pacientForm.reset()
          }
        })
    }
  }

}
