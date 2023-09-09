import { NgModule } from '@angular/core';
import { ListComponent } from './ListComponent';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@NgModule({
  exports: [ListComponent],
  declarations: [ListComponent],
  imports: [MatCardModule, MatButtonModule, CommonModule],
})
export class ListModule {
}
