import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ReportService} from "./service/report/report.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  token !: string;
  public reportForm = this.formBuilder.group({

    medicalHistory: ['', Validators.required],
    currentMedications: ['', Validators.required],
    cardiovascularIssues: [false],
    diabetes: [false],
    familyHistoryCardiovascularIssues: [false],
    familyHistoryDiabetes: [false],
    physicalActivity: ['teste', Validators.required],
    smoker: [false],
    alcoholConsumption: [0, Validators.min(0)],
    emergencyContactName: ['teste', Validators.required],
    emergencyContactPhone: ['teste', Validators.required],
    observations: ['teste']
  })
  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log('Token recebido:', this.token);
    });
  }
}
