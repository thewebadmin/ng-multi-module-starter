import { NgModule } from '@angular/core';
import { AuthRoutingModule } from 'src/app/modules/auth/auth-routing.module';
import { DashboardComponent } from 'src/app/modules/auth/pages/dashboard/dashboard.component';
import { AppCoreModule } from 'src/app/_app-core/app-core.module';
import { AuthLayoutComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    DashboardComponent
  ],
  imports: [
    AppCoreModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
