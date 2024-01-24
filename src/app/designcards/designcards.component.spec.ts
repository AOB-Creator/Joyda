import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigncardsComponent } from './designcards.component';

describe('DesigncardsComponent', () => {
  let component: DesigncardsComponent;
  let fixture: ComponentFixture<DesigncardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesigncardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesigncardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
