import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SecondarySidebarComponent } from './secondary-sidebar/secondary-sidebar.component';

import { QuickviewService} from './quickview/quickview.service';
import { TypeaheadModule } from 'ngx-bootstrap';

import { ParallaxDirective } from './parallax/parallax.directive';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FormGroupDefaultDirective } from './forms/form-group-default.directive';
import { ViewDirective } from './view/view.directive';

import { pgCollapseModule } from './collapse/collapse.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ContainerComponent } from './container/container.component';
import { pageContainer } from './container/page-container.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuAltComponent } from './menu/menu-alt.component';
import { MenuIconComponent } from './menu/menu-icon.component';

import { ListItemComponent} from './list-view/list-item/list-item.component';
import { ListViewContainerComponent } from './list-view/list-view-container/list-view-container.component';
import { pgRetinaDirective } from './retina/retina.directive';
import { AuthComponent } from './auth/auth.component';
// import { DeviceInterfaceEditComponent } from './device-interface-edit/device-interface-edit.component';
// import { DeviceInterfacesComponent } from './device-interfaces/device-interfaces.component';
// import { DeviceUsersComponent } from './device-users/device-users.component';
// import { DeviceDashboardComponent } from './device-dashboard/device-dashboard.component';
// import { DevicePowerComponent } from './device-power/device-power.component';
// import { RoutesTableComponent } from './routes-table/routes-table.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    ObserversModule,
    TypeaheadModule.forRoot(),
    PerfectScrollbarModule,
    RouterModule
  ],
  declarations: [
  SecondarySidebarComponent,
  ParallaxDirective,
  BreadcrumbComponent,
  FormGroupDefaultDirective,
  ViewDirective,
  ContainerComponent,
  pageContainer,
  MenuComponent,
  MenuAltComponent,
  MenuIconComponent,
  ListItemComponent,
  ListViewContainerComponent,
  pgRetinaDirective,
  AuthComponent,
  // DeviceInterfaceEditComponent,
  // DeviceInterfacesComponent,
  // DeviceUsersComponent,
  // DevicePowerComponent,
  // DeviceDashboardComponent,
  //  RoutesTableComponent,
  ],
  exports: [
  SecondarySidebarComponent,
  ParallaxDirective,
  BreadcrumbComponent,
  FormGroupDefaultDirective,
  ViewDirective,
  pgCollapseModule,
  ContainerComponent,
  pageContainer,
  MenuComponent,
  MenuAltComponent,
  MenuIconComponent,
  ListItemComponent,
  ListViewContainerComponent,
  pgRetinaDirective
  ],
  providers:[QuickviewService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]

})
export class SharedModule { }
