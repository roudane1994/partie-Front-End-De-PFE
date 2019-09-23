import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspaceAgentComponent } from './agent/espace-agent/espace-agent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthUserGuardService } from './services/auth-user-guard.service';
import { EspaceAdminComponent } from './admin/espace-admin/espace-admin.component';
import { EspaceTechnicienComponent } from './technicien/espace-technicien/espace-technicien.component';
import { AuthAdminGuardService } from './services/auth-admin-guard.service';
import { AuthTechnicienGuardService } from './services/auth-technicien-guard.service';
// {path:"espaceAdmin",canActivate: [AuthAdminGuardService],component:EspaceAdminComponent},
const routes: Routes = [
  {path:"espaceAgent",canActivate: [AuthUserGuardService],component:EspaceAgentComponent},
  {path:"espaceAdmin/:mode",component:EspaceAdminComponent},
  {path:"espaceTechnicien",component:EspaceTechnicienComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  { path:'', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
