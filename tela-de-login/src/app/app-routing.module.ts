import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{path:'dashboard', canActivate: [AuthGuardService], loadChildren: ()=> import('./view/dashboard/dashboard.module').then(m => m.DashboardModule),},
{path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
