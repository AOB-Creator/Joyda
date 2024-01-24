import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseMarketComponent } from './purchase-market.component';

describe('PurchaseMarketComponent', () => {
  let component: PurchaseMarketComponent;
  let fixture: ComponentFixture<PurchaseMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseMarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
