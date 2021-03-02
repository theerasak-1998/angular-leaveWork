import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users-list',
        loadChildren: () =>
          import('./users-list/users-list.module').then(
            (m) => m.UsersListModule
          ),
      },
      {
        path: 'calender',
        loadChildren: () =>
          import('./calender/calender.module').then((m) => m.CalenderModule),
      },
      {
        path: 'overview',
        loadChildren: () =>
          import('./overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: 'member',
        loadChildren: () =>
          import('./members/members.module').then((m) => m.MembersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}