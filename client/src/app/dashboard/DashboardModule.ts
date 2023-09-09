import { NgModule } from '@angular/core';
import { DashboardService } from './service/DashboardService';
import { DashboardResource } from './service/DashboardResource';
import { ListModule } from './list/ListModule';

@NgModule({
  imports: [ListModule],

  providers: [DashboardService, DashboardResource],
})
export class DashboardModule {

}
