import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityComponent } from './university/university.component';
import { FormsModule } from '@angular/forms';
import { MasterRoutingModule } from './master-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [UniversityComponent],
  imports: [
    CommonModule,
    FormsModule,    
    NgxPaginationModule,
    MasterRoutingModule
  ],
})
export class MasterModule { }
