import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNvComponent } from './crud-nv.component';

describe('CrudNvComponent', () => {
  let component: CrudNvComponent;
  let fixture: ComponentFixture<CrudNvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudNvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
