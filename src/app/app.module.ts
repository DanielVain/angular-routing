import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PetsComponent } from './pages/pets/pets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QueryParamsComponent } from './pages/query-params/query-params.component';
import { ServersComponent } from './pages/servers/servers.component';
import { ServerInfoComponent } from './pages/server-info/server-info.component';
import { ServerCardComponent } from './components/server-card/server-card.component';
import { PageNotFoundTComponent } from './pages/page-not-found-t/page-not-found-t.component';
import { NavbarTComponent } from './components/navbar-t/navbar-t.component';
import { LoginPageTComponent } from './pages/login-page-t/login-page-t.component';
import { ParamsExampleTComponent } from './pages/params-example-t/params-example-t.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PetsComponent,
    NavbarComponent,
    QueryParamsComponent,
    ServersComponent,
    ServerInfoComponent,
    ServerCardComponent,
    PageNotFoundTComponent,
    NavbarTComponent,
    LoginPageTComponent,
    ParamsExampleTComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
