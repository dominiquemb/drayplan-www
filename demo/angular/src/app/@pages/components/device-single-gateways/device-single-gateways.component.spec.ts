import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSingleGatewaysComponent } from './device-single-gateways.component';

describe('DeviceSingleGatewaysComponent', () => {
  let component: DeviceSingleGatewaysComponent;
  let fixture: ComponentFixture<DeviceSingleGatewaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSingleGatewaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSingleGatewaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
