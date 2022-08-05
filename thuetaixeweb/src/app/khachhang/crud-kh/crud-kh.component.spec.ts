import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudKhComponent } from './crud-kh.component';

describe('CrudKhComponent', () => {
  let component: CrudKhComponent;
  let fixture: ComponentFixture<CrudKhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudKhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
