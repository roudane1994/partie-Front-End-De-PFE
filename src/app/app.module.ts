import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EspaceAgentComponent } from './agent/espace-agent/espace-agent.component';
import { ListIncidentComponent } from './agent/list-incident/list-incident.component';
import { FormIncidentComponent } from './agent/form-incident/form-incident.component';
import { EspaceAdminComponent } from './admin/espace-admin/espace-admin.component';
import { EspaceTechnicienComponent } from './technicien/espace-technicien/espace-technicien.component';
import { MenuComponent } from './admin/menu/menu.component';
import { GestionAgentComponent } from './admin/gestion-agent/gestion-agent.component';
import { CreatedTechnicienComponent } from './admin/created-technicien/created-technicien.component';
import { GestionTechnicienComponent } from './admin/gestion-technicien/gestion-technicien.component';
import { GestionIncidentComponent } from './admin/gestion-incident/gestion-incident.component';
import { StatistiqueIncidentComponent } from './admin/statistique-incident/statistique-incident.component';
import { CreatedServiceComponent } from './admin/created-service/created-service.component';
import { GestionServiceComponent } from './admin/gestion-service/gestion-service.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StatistiqueComponent } from './admin/statistique/statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    EspaceAgentComponent,
    ListIncidentComponent,
    FormIncidentComponent,
    EspaceAdminComponent,
    EspaceTechnicienComponent,
    MenuComponent,
    GestionAgentComponent,
    CreatedTechnicienComponent,
    GestionTechnicienComponent,
    GestionIncidentComponent,
    StatistiqueIncidentComponent,
    CreatedServiceComponent,
    GestionServiceComponent,
    ProfileComponent,
    ChangePasswordComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

