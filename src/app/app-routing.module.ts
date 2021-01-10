import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { HomeComponent } from './exam/home/home.component';
import { TestComponent } from './exam/test/test.component';
import { PopupComponent } from './modal/popup/popup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
{path: '',redirectTo: '/signIn',pathMatch: 'full'},
{path:'signIn', component:SignInComponent},
{path:'home', component:HomeComponent},
{path:'Exam', component:TestComponent},
{path:'Result', component:ResultComponent},
{path:"**" , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
