import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNvComponent } from './show-nv.component';

describe('ShowNvComponent', () => {
  let component: ShowNvComponent;
  let fixture: ComponentFixture<ShowNvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
