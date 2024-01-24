import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YetqazibberishComponent } from './yetqazibberish.component';

describe('YetqazibberishComponent', () => {
  let component: YetqazibberishComponent;
  let fixture: ComponentFixture<YetqazibberishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YetqazibberishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YetqazibberishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
