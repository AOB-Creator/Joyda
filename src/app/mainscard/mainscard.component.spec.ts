import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainscardComponent } from './mainscard.component';

describe('MainscardComponent', () => {
  let component: MainscardComponent;
  let fixture: ComponentFixture<MainscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainscardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
