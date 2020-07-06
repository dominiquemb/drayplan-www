import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSingleGatewaysEditComponent } from './device-single-gateways-edit.component';

describe('DeviceSingleGatewaysEditComponent', () => {
  let component: DeviceSingleGatewaysEditComponent;
  let fixture: ComponentFixture<DeviceSingleGatewaysEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSingleGatewaysEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSingleGatewaysEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
