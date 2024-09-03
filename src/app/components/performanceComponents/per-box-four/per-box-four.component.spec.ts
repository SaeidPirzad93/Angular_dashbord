import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerBoxFourComponent } from './per-box-four.component';

describe('PerBoxFourComponent', () => {
  let component: PerBoxFourComponent;
  let fixture: ComponentFixture<PerBoxFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerBoxFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerBoxFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
