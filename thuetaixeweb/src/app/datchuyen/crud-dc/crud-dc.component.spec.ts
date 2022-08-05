import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDcComponent } from './crud-dc.component';

describe('CrudDcComponent', () => {
  let component: CrudDcComponent;
  let fixture: ComponentFixture<CrudDcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
