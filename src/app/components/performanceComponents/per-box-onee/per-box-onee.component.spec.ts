import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerBoxOneeComponent } from './per-box-onee.component';

describe('PerBoxOneeComponent', () => {
  let component: PerBoxOneeComponent;
  let fixture: ComponentFixture<PerBoxOneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerBoxOneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerBoxOneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
