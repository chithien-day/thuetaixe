import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCvComponent } from './crud-cv.component';

describe('CrudCvComponent', () => {
  let component: CrudCvComponent;
  let fixture: ComponentFixture<CrudCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
