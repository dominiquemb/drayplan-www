import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInterfaceEditComponent } from './device-interface-edit.component';

describe('DeviceInterfaceEditComponent', () => {
  let component: DeviceInterfaceEditComponent;
  let fixture: ComponentFixture<DeviceInterfaceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceInterfaceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInterfaceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
