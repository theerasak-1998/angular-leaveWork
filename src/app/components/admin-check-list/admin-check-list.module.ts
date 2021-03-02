import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { AdminCheckListComponent } from './admin-check-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzImageModule } from 'ng-zorro-antd/image';


@NgModule({
  declarations: [AdminCheckListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzSelectModule,
    NzTableModule,
    NzMenuModule,
    NzPaginationModule,
    NzTabsModule,
    NzImageModule,
    NzInputModule,
    NzTagModule,
    NzToolTipModule
  ],
  exports:[
    AdminCheckListComponent
  ]
})
export class AdminCheckListModule { }