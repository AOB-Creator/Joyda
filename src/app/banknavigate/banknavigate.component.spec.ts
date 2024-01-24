import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanknavigateComponent } from './banknavigate.component';

describe('BanknavigateComponent', () => {
  let component: BanknavigateComponent;
  let fixture: ComponentFixture<BanknavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanknavigateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanknavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
