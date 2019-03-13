import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

const approutes: Routes = [
  { path: 'Home', component: HomecomponentComponent },
  { path: 'Signin', component: SigninComponent },
  { path: 'Signup', component: SignupComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   declarations: [AuthComponent, SignupComponent, SigninComponent, HomecomponentComponent]
// })
// export class AppRoutingModule {}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomecomponentComponent,
    SigninComponent,
    SignupComponent,
    AuthComponent
  ],
  // exports: [RouterModule],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
