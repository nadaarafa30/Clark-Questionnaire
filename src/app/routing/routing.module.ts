import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { QuestionnairComponent } from 'src/app/components/questionnair/questionnair.component';

const routes:Routes =[
  {
     path:'', component:HomeComponent
  },
  {
    path:'questionnair', component:QuestionnairComponent
    
  }
  ]

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class RoutingModule { }
