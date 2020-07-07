import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import{ FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemandeComponent } from './demande/demande.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService} from './message.service';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent, canActivate: [AuthGuardService] },
  {path:'demande',component:DemandeComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    DemandeComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthenticationService,AuthGuardService,MessageService,HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
