
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {WebcamModule} from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './exam/home/home.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { ResultComponent } from './result/result.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    WebcamModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
