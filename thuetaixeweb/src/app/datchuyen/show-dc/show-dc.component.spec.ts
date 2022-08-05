import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDcComponent } from './show-dc.component';

describe('ShowDcComponent', () => {
  let component: ShowDcComponent;
  let fixture: ComponentFixture<ShowDcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
