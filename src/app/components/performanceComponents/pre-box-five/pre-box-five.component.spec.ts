import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBoxFiveComponent } from './pre-box-five.component';

describe('PreBoxFiveComponent', () => {
  let component: PreBoxFiveComponent;
  let fixture: ComponentFixture<PreBoxFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreBoxFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreBoxFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
