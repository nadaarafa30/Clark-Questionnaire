import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from 'src/app/routing/routing.module';
import { HomeComponent } from './components/home/home.component';
import { QuestionnairComponent } from './components/questionnair/questionnair.component';
import { FreeTextComponent } from './components/questionnair/free-text/free-text.component';
import { MultiChoiceComponent } from './components/questionnair/multi-choice/multi-choice.component';
import { SingleChoiceComponent } from './components/questionnair/single-choice/single-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionnairComponent,
    FreeTextComponent,
    MultiChoiceComponent,
    SingleChoiceComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
