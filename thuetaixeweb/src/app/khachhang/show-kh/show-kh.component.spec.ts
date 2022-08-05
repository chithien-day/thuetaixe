import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKhComponent } from './show-kh.component';

describe('ShowKhComponent', () => {
  let component: ShowKhComponent;
  let fixture: ComponentFixture<ShowKhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
