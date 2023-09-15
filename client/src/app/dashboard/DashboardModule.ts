import { NgModule } from '@angular/core';
import { DashboardService } from './service/DashboardService';
import { DashboardResource } from './service/DashboardResource';
import { ListModule } from './list/ListModule';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ListModule, HttpClientModule],

  providers: [DashboardService, DashboardResource],
})
export class DashboardModule {

}
