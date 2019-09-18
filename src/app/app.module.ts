import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginationComponent} from './components/logination/logination.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import {DoctorComponent} from './components/doctor/doctor.component';
import {LaboratoryComponent} from './components/laboratory/laboratory.component';
import {PatientComponent} from './components/patient/patient.component';
import {RouterModule, Routes} from '@angular/router';

import { RegLaboratoryComponent } from './components/registration/reg-laboratory/reg-laboratory.component';
import { RegPatientComponent } from './components/registration/reg-patient/reg-patient.component';
import {RegDoctorComponent} from './components/registration/reg-doctor/reg-doctor.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginationComponent},
  {path: 'registration', component: RegistrationComponent, children: [
      {path: 'doctor', component: RegDoctorComponent},
      {path: 'laboratory', component: RegLaboratoryComponent},
      {path: 'patient', component: RegPatientComponent},
    ]},
  {path: 'patient', component: PatientComponent},
  {path: 'laboratory', component: LaboratoryComponent},
  {path: 'doctor', component: DoctorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginationComponent,
    RegistrationComponent,
    DoctorComponent,
    LaboratoryComponent,
    PatientComponent,
    RegDoctorComponent,
    RegLaboratoryComponent,
    RegPatientComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
