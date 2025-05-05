import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PostersComponent } from './posters/posters.component';
import { ContactComponent } from './contact/contact.component';
import { PostersDetailedComponent } from './posters-detailed/posters-detailed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: LandingComponent ,title:'Home - Illusion'
  },
  { path: 'Posters', component: PostersComponent ,title:'Posters - Illusion'},
  { path: 'Contact', component: ContactComponent, title:'Contact - Illusion' },
  { path: 'Posters/:id', component:PostersDetailedComponent,title:'Poster - Illusion' },
  { path: 'Success',component:SuccessComponent, title:'Success - Illusion'},
  { path: '**', component: PageNotFoundComponent,title:'404 - Illusion' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
