import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from 'src/app/routing/routing.module';
import { HomeComponent } from './components/home/home.component';
import { QuestionnairComponent } from './components/questionnair/questionnair.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionnairComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
