import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './user-list/user-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { applicationReducer } from './state/application.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './state/application.effects';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SearchPipe,
    SortPipe,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot({application : applicationReducer} as ActionReducerMap<any,any>),
    EffectsModule.forRoot([ApplicationEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
