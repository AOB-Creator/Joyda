import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePaymentsComponent } from './service-payments.component';

describe('ServicePaymentsComponent', () => {
  let component: ServicePaymentsComponent;
  let fixture: ComponentFixture<ServicePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
