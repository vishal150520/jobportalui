import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatedashboardComponent } from './candidatedashboard.component';

describe('CandidatedashboardComponent', () => {
  let component: CandidatedashboardComponent;
  let fixture: ComponentFixture<CandidatedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
