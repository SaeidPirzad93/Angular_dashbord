import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerBoxThreeComponent } from './per-box-three.component';

describe('PerBoxThreeComponent', () => {
  let component: PerBoxThreeComponent;
  let fixture: ComponentFixture<PerBoxThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerBoxThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerBoxThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
