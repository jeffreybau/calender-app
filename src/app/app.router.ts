import { Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
{path:'calendar', component: CalendarComponent},
{path: 'home', component: HomeComponent},
{path:'login' , component: LoginComponent},
{path: 'signup', component: SignUpComponent},
{path: 'user', component: UserComponent},
{ path: '**', redirectTo: 'home' }
]
