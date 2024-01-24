import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileplatformComponent } from './mobileplatform.component';

describe('MobileplatformComponent', () => {
  let component: MobileplatformComponent;
  let fixture: ComponentFixture<MobileplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileplatformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
