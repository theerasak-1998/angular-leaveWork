import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDetailsComponent } from './member-details.component';

const routes: Routes = [{ path: ':id', component: MemberDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberDetailsRoutingModule { }
