import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.scss']
})
export class PacientComponent {
  isLoading = false;
  public pacientForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    uf: ['', Validators.required],
    phone: ['', Validators.required],
    birth: ['', [Validators.required, this.dateValidator]],
    gender: ['', Validators.required],
    profession: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder,
              // private pacientService: PacientService
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
  // handlePacientForm(): void {
  //   if (this.pacientForm?.value && this.pacientForm.valid) {
  //     this.isLoading = true
  //     const requestPacient = this.pacientForm.value as PacientRequest
  //     this.pacientService.createPacient(requestPacient)
  //       .subscribe({
  //         next: (response) => {
  //           if(response){
  //             this.isLoading = false;
  //             console.log("Foi", response)
  //           }
  //         },
  //         error :(err) =>{
  //           console.log(err)
  //           this.pacientForm.reset()
  //         }
  //       })
  //   }
  // }

}
