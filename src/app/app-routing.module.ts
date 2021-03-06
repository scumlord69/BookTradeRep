import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'AccountDetails', loadChildren: './account-details/account-details.module#AccountDetailsPageModule' },
  { path: 'AccountUpdate', loadChildren: './account-update/account-update.module#AccountUpdatePageModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Register', loadChildren: './register/register.module#RegisterPageModule' },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
