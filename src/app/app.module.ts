import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { PostersComponent } from './posters/posters.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PostersDetailedComponent } from './posters-detailed/posters-detailed.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Posters', component: PostersComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Posters/:id', component:PostersDetailedComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactComponent,
    PostersComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    PostersDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
