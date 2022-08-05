import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTkComponent } from './crud-tk.component';

describe('CrudTkComponent', () => {
  let component: CrudTkComponent;
  let fixture: ComponentFixture<CrudTkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
