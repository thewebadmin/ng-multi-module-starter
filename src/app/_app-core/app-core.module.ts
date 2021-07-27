import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthenticationService } from 'src/app/_app-core/services/authentication.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
})
export class AppCoreModule {
  public static forRoot(): ModuleWithProviders<AppCoreModule> {
    return {
      ngModule: AppCoreModule,
      providers: [
        AuthenticationService
      ],
    };
  }
}
