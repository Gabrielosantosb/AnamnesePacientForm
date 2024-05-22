import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AnotationService} from "../../service/anotation/anotation.service";
import {ProgressBarModule} from "primeng/progressbar";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {ToastMessage} from "../../service/toast-message/toast-message";
import {AnnotationRequest} from "../../model/annotation/AnnotationRequest";

@Component({
  selector: 'app-anotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  token !: string;
  pacientId !: number;
  isLoading = false
  loadingMode: ProgressBarModule = 'indeterminate';
  public anotationForm = this.formBuilder.group({
    comments: ['', [Validators.required, Validators.minLength(8)]]


  })
  constructor(
    private formBuilder: FormBuilder,
    private anotationService: AnotationService,
    private route: ActivatedRoute,
    private router: Router,
    private toastMessage: ToastMessage
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.pacientId = params['pacientId'];
      console.log('Token recebido:', this.token);
      console.log('PacientId recebido:', this.pacientId);

    });
  }
  onSubmit(): void {
    var pacientId = this.pacientId;
    if (pacientId) {
      console.log('Adicionar relatório', this.anotationForm.value );
      const requestData = this.anotationForm.value as AnnotationRequest

      this.anotationService.createAnotation(pacientId, requestData, this.token)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response) {
              console.log(response);
              this.router.navigateByUrl('/sucesso', { replaceUrl: true });
            }
          },
          error: (err) => {
            this.toastMessage.ErrorMessage('Erro ao criar anotação do paciente!');
            console.log(err);
          }
        });
    }
    console.log('Aqui o formulário', this.anotationForm.value);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
