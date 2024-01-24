import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainslickComponent } from './mainslick.component';

describe('MainslickComponent', () => {
  let component: MainslickComponent;
  let fixture: ComponentFixture<MainslickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainslickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainslickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
