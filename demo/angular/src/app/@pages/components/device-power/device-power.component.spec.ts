import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePowerComponent } from './device-power.component';

describe('DevicePowerComponent', () => {
  let component: DevicePowerComponent;
  let fixture: ComponentFixture<DevicePowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicePowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
