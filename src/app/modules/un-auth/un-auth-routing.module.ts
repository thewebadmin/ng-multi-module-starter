import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/app/modules/un-auth/pages/homepage/homepage.component';

const unAuthRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(unAuthRoutes)],
  exports: [RouterModule]
})
export class UnAuthRoutingModule { }
