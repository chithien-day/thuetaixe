import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatchuyenComponent } from './datchuyen.component';

describe('DatchuyenComponent', () => {
  let component: DatchuyenComponent;
  let fixture: ComponentFixture<DatchuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatchuyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatchuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
