import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestoffersComponent } from './bestoffers.component';

describe('BestoffersComponent', () => {
  let component: BestoffersComponent;
  let fixture: ComponentFixture<BestoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestoffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
