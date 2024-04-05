import { Component } from '@angular/core';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss']
})
export class SucessComponent {
  logoUrl?= "../../../assets/img/doctorSucess.svg";
  subtitle?: string;
}
