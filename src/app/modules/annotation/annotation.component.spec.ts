import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationComponent } from './annotation.component';

describe('ReportComponent', () => {
  let component: AnnotationComponent;
  let fixture: ComponentFixture<AnnotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnotationComponent]
    });
    fixture = TestBed.createComponent(AnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
