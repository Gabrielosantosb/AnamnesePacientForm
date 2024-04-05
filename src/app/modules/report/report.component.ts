import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ReportService} from "../../service/report/report.service";
import {ProgressBarModule} from "primeng/progressbar";
import {ActivatedRoute, Router} from "@angular/router";
import {ReportRequest} from "../../model/report/ReportRequest";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  token !: string;
  pacientId !: number;
  isLoading = false
  loadingMode: ProgressBarModule = 'indeterminate';
  public reportForm = this.formBuilder.group({
    medicalHistory: ['Default medical history', Validators.required],
    currentMedications: ['Default current medications', Validators.required],
    cardiovascularIssues: [false],
    diabetes: [false],
    familyHistoryCardiovascularIssues: [false],
    familyHistoryDiabetes: [false],
    physicalActivity: ['Default physical activity', Validators.required],
    smoker: [false],
    alcoholConsumption: [0, [Validators.min(0), Validators.max(5)]],
    emergencyContactName: ['Default emergency contact name', Validators.required],
    emergencyContactPhone: ['Default emergency contact phone', Validators.required],
    observations: ['Default observations']
  })
  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.pacientId = params['pacientId'];
      console.log('Token recebido:', this.token);
      console.log('PacientId recebido:', this.pacientId);

    });
  }
    onSubmit(): void{
    var pacientId = this.pacientId
      if(pacientId){
        const requestCreateForm = this.reportForm.value as ReportRequest
        console.log('Adicionar relátorio', requestCreateForm)
        this.reportService.createReport(pacientId, requestCreateForm, this.token).
          pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) =>{
              if(response){
                console.log(response)
                this.router.navigateByUrl('/sucesso', { replaceUrl: true });
              }
            },
            error:(err) =>{
              console.log(err)
            }
          })
      }
    console.log('Aqui o formulário', this.reportForm.value)
    }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
