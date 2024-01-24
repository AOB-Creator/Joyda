import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangselectorComponent } from './langselector.component';

describe('LangselectorComponent', () => {
  let component: LangselectorComponent;
  let fixture: ComponentFixture<LangselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
