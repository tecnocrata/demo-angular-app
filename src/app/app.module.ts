import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SecondComponent } from './components/second/second.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers, storeDevTools } from './state/reducers';

@NgModule({
  declarations: [AppComponent, PrincipalComponent, SecondComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    storeDevTools,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
