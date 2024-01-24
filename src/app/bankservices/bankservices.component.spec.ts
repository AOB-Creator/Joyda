import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankservicesComponent } from './bankservices.component';

describe('BankservicesComponent', () => {
  let component: BankservicesComponent;
  let fixture: ComponentFixture<BankservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
