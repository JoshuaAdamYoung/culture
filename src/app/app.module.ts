import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './cmp/user-profile/user-profile.component';
import { LocalSearchComponent } from './cmp/local-search/local-search.component';
import { CultureDetailComponent } from './cmp/culture-detail/culture-detail.component';
import { LoginComponent } from './cmp/login/login.component';
import { ShareComponent } from './cmp/share/share.component';
import { LocalBrowseComponent } from './cmp/local-browse/local-browse.component';
import { UserCulturesComponent } from './cmp/user-cultures/user-cultures.component';

import { environment } from '../environments/environment'

const appRoutes: Routes = [
  {
    path: 'user/:id/cultures',
    component: UserCulturesComponent
  },
  {
    path: 'user/:id',
    component: UserProfileComponent
  },
  {
    path: 'local/search',
    component: LocalSearchComponent
  },
  {
    path: 'local/:zip',
    component: LocalBrowseComponent
  },
  {
    path: 'culture/:id',
    component: CultureDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'share',
    component: ShareComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    LocalBrowseComponent,
    LocalSearchComponent,
    CultureDetailComponent,
    LoginComponent,
    ShareComponent,
    UserCulturesComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
