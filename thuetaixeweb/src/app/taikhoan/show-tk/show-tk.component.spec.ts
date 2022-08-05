import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTkComponent } from './show-tk.component';

describe('ShowTkComponent', () => {
  let component: ShowTkComponent;
  let fixture: ComponentFixture<ShowTkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
