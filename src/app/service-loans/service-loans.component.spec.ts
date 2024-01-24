import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLoansComponent } from './service-loans.component';

describe('ServiceLoansComponent', () => {
  let component: ServiceLoansComponent;
  let fixture: ComponentFixture<ServiceLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceLoansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
