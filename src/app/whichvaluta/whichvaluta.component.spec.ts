import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhichvalutaComponent } from './whichvaluta.component';

describe('WhichvalutaComponent', () => {
  let component: WhichvalutaComponent;
  let fixture: ComponentFixture<WhichvalutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhichvalutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhichvalutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
