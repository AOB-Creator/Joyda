import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyworksComponent } from './moneyworks.component';

describe('MoneyworksComponent', () => {
  let component: MoneyworksComponent;
  let fixture: ComponentFixture<MoneyworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyworksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
