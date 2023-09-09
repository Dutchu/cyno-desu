import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/DashboardModule';
import { ListModule } from './dashboard/list/ListModule';
import { DashboardService } from './dashboard/service/DashboardService';
import { DashboardResource } from './dashboard/service/DashboardResource';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [ListModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [DashboardService, DashboardResource],
  bootstrap: [AppComponent]
})
export class AppModule { }

