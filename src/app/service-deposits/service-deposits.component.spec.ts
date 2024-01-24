import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDepositsComponent } from './service-deposits.component';

describe('ServiceDepositsComponent', () => {
  let component: ServiceDepositsComponent;
  let fixture: ComponentFixture<ServiceDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDepositsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
