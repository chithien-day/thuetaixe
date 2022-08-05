import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCvComponent } from './show-cv.component';

describe('ShowCvComponent', () => {
  let component: ShowCvComponent;
  let fixture: ComponentFixture<ShowCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
