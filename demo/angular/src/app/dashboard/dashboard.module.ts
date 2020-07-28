//Angular Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { pgCardModule} from '../@pages/components/card/card.module';
import { pgSwitchModule } from '../@pages/components/switch/switch.module';
import { pgTabsModule } from '../@pages/components/tabs/tabs.module';
import { pgSelectModule} from '../@pages/components/select/select.module';

import { NvD3Module } from 'ngx-nvd3';
import { NgxEchartsModule } from 'ngx-echarts';

import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

// Widgets
import { ImageWidgetComponent } from './widgets/image-widget/image-widget.component';
import { ImageWidgetBasicComponent } from './widgets/image-widget-basic/image-widget-basic.component';
import { GraphTileWidgetComponent } from './widgets/graph-tile-widget/graph-tile-widget.component';
import { PlainWidgetComponent } from './widgets/plain-widget/plain-widget.component';
import { PlainLiveWidgetComponent } from './widgets/plain-live-widget/plain-live-widget.component';
import { GraphLiveWidgetComponent } from './widgets/graph-live-widget/graph-live-widget.component';
import { BarTileWidgetComponent } from './widgets/bar-tile-widget/bar-tile-widget.component';
import { GraphTileFlatWidgetComponent } from './widgets/graph-tile-flat-widget/graph-tile-flat-widget.component';
import { ProgressTileFlatWidgetComponent } from './widgets/progress-tile-flat-widget/progress-tile-flat-widget.component';
import { StatTileWidgetComponent } from './widgets/stat-tile-widget/stat-tile-widget.component';
import { GraphWidgetComponent } from './widgets/graph-widget/graph-widget.component';
import { TableBasicWidgetComponent } from './widgets/table-basic-widget/table-basic-widget.component';
import { MapWidgetComponent } from './widgets/map-widget/map-widget.component';
import { RealtimeWidgetComponent } from './widgets/realtime-widget/realtime-widget.component';
import { StackedBarWidgetComponent } from './widgets/stacked-bar-widget/stacked-bar-widget.component';
import { GraphOptionsWidgetComponent } from './widgets/graph-options-widget/graph-options-widget.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { TableWidgetComponent } from './widgets/table-widget/table-widget.component';
import { RoutesTableComponent } from '../@pages/components/routes-table/routes-table.component';
import { SocialImageTileWidgetComponent } from './widgets/social-image-tile-widget/social-image-tile-widget.component';
import { SocialPostTileWidgetComponent } from './widgets/social-post-tile-widget/social-post-tile-widget.component';
import { ProjectProgressWidgetComponent } from './widgets/project-progress-widget/project-progress-widget.component';
import { WeeklySalesWidgetComponent } from './widgets/weekly-sales-widget/weekly-sales-widget.component';
import { QuickStatsWidgetComponent } from './widgets/quick-stats-widget/quick-stats-widget.component';
import { TodoListWidgetComponent } from './widgets/todo-list-widget/todo-list-widget.component';
import { GraphWidgetBasicComponent } from './widgets/graph-widget-basic/graph-widget-basic.component';
import { DevicePowerComponent } from '../@pages/components/device-power/device-power.component';
import { DeviceDashboardComponent } from '../@pages/components/device-dashboard/device-dashboard.component';
import { DeviceFirewallDashboardComponent } from '../@pages/components/device-firewall-dashboard/device-firewall-dashboard.component';
import { DeviceFreeradiusDashboardComponent } from '../@pages/components/device-freeradius-dashboard/device-freeradius-dashboard.component';
import { DeviceServicesSupportDashboardComponent } from '../@pages/components/device-services-support-dashboard/device-services-support-dashboard.component';
import { DeviceInterfacesWirelessDashboardComponent } from '../@pages/components/device-interfaces-wireless-dashboard/device-interfaces-wireless-dashboard.component';
import { DeviceEndpointDefenseDashboardComponent } from '../@pages/components/device-endpoint-defense-dashboard/device-endpoint-defense-dashboard.component';
import { DeviceAdministrationDashboardComponent } from '../@pages/components/device-administration-dashboard/device-administration-dashboard.component';
import { DeviceHdnCyberDefenseDashboardComponent } from '../@pages/components/device-hdn-cyber-defense-dashboard/device-hdn-cyber-defense-dashboard.component';
import { DeviceUsersComponent } from '../@pages/components/device-users/device-users.component';
import { DeviceInterfacesComponent } from '../@pages/components/device-interfaces/device-interfaces.component';
import { DeviceInterfaceEditComponent } from '../@pages/components/device-interface-edit/device-interface-edit.component';
import { DeviceFirewallRulesComponent } from '../@pages/components/device-firewall-rules/device-firewall-rules.component';
import { DeviceSingleGatewaysComponent } from '../@pages/components/device-single-gateways/device-single-gateways.component';
import { DeviceEditFormComponent } from '../@pages/components/device-edit-form/device-edit-form.component';
import { DeviceDataSummaryComponent } from '../@pages/components/device-data-summary/device-data-summary.component';
import { DeviceSingleGatewaysEditComponent } from '../@pages/components/device-single-gateways-edit/device-single-gateways-edit.component';


const components = [
    ImageWidgetComponent,
    ImageWidgetBasicComponent,
    GraphTileWidgetComponent,
    PlainWidgetComponent,
    PlainLiveWidgetComponent,
    GraphLiveWidgetComponent,
    BarTileWidgetComponent,
    GraphTileFlatWidgetComponent,
    ProgressTileFlatWidgetComponent,
    StatTileWidgetComponent,
    GraphWidgetComponent,
    GraphWidgetBasicComponent,
    TableBasicWidgetComponent,
    MapWidgetComponent,
    RealtimeWidgetComponent,
    StackedBarWidgetComponent,
    GraphOptionsWidgetComponent,
    WeatherWidgetComponent,
    TableWidgetComponent,
    SocialImageTileWidgetComponent,
    SocialPostTileWidgetComponent,
    ProjectProgressWidgetComponent,
    WeeklySalesWidgetComponent,
    QuickStatsWidgetComponent,
    TodoListWidgetComponent,
    DeviceDashboardComponent,
    DeviceFirewallDashboardComponent,
    DeviceServicesSupportDashboardComponent,
    DeviceInterfacesWirelessDashboardComponent,
    DeviceHdnCyberDefenseDashboardComponent,
    DevicePowerComponent,
    DeviceUsersComponent,
    DeviceFirewallRulesComponent,
    DeviceFreeradiusDashboardComponent,
    DeviceEndpointDefenseDashboardComponent,
    DeviceAdministrationDashboardComponent,
    DeviceSingleGatewaysComponent,
    DeviceEditFormComponent,
    DeviceDataSummaryComponent,
    DeviceSingleGatewaysEditComponent,
    DeviceInterfacesComponent,
    DeviceInterfaceEditComponent,
    RoutesTableComponent,
];

@NgModule({
  imports: [
    pgCardModule,
    pgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    pgTabsModule,
    NvD3Module,
    NgxEchartsModule,
    SwiperModule,
    pgSwitchModule
  ],
  declarations: components,
  exports: components,
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }]
})
export class DashboardModule { }
