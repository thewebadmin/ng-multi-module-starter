import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from 'src/app/modules/auth/auth.component';
import { UnAuthLayoutComponent } from 'src/app/modules/un-auth/un-auth.component';
import { AuthGuard } from 'src/app/_app-core/helpers/auth.guard';

const routes: Routes = [
  {
    path: 'portal',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: UnAuthLayoutComponent,
    loadChildren: () =>
      import('./modules/un-auth/un-auth.module').then((m) => m.UnAuthModule),
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
