import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFirewallRulesComponent } from './device-firewall-rules.component';

describe('DeviceFirewallRulesComponent', () => {
  let component: DeviceFirewallRulesComponent;
  let fixture: ComponentFixture<DeviceFirewallRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceFirewallRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFirewallRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
