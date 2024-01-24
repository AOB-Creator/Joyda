import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdernewcardComponent } from './ordernewcard.component';

describe('OrdernewcardComponent', () => {
  let component: OrdernewcardComponent;
  let fixture: ComponentFixture<OrdernewcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdernewcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdernewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
