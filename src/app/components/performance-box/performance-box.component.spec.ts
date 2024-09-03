import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceBoxComponent } from './performance-box.component';

describe('PerformanceBoxComponent', () => {
  let component: PerformanceBoxComponent;
  let fixture: ComponentFixture<PerformanceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
