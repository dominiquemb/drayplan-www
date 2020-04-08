import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInterfacesComponent } from './device-interfaces.component';

describe('DeviceInterfacesComponent', () => {
  let component: DeviceInterfacesComponent;
  let fixture: ComponentFixture<DeviceInterfacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceInterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
