import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerBoxTwoComponent } from './per-box-two.component';

describe('PerBoxTwoComponent', () => {
  let component: PerBoxTwoComponent;
  let fixture: ComponentFixture<PerBoxTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerBoxTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerBoxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
