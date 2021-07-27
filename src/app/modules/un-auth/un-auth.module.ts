import { NgModule } from '@angular/core';
import { HomepageComponent } from 'src/app/modules/un-auth/pages/homepage/homepage.component';
import { UnAuthRoutingModule } from 'src/app/modules/un-auth/un-auth-routing.module';
import { AppCoreModule } from 'src/app/_app-core/app-core.module';
import { UnAuthLayoutComponent } from './un-auth.component';

@NgModule({
  declarations: [
    UnAuthLayoutComponent,
    HomepageComponent
  ],
  imports: [
    AppCoreModule,
    UnAuthRoutingModule
  ]
})
export class UnAuthModule { }
