import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankservicecardsComponent } from './bankservicecards.component';

describe('BankservicecardsComponent', () => {
  let component: BankservicecardsComponent;
  let fixture: ComponentFixture<BankservicecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankservicecardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankservicecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
