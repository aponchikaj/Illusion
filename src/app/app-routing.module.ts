import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PostersComponent } from './posters/posters.component';
import { ContactComponent } from './contact/contact.component';
import { PostersDetailedComponent } from './posters-detailed/posters-detailed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Posters', component: PostersComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Posters/:id', component:PostersDetailedComponent },
  { path: 'Success',component:SuccessComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
