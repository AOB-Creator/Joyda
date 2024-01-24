import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublecardsComponent } from './doublecards.component';

describe('DoublecardsComponent', () => {
  let component: DoublecardsComponent;
  let fixture: ComponentFixture<DoublecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoublecardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoublecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
