import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AllQuestionnairService } from 'src/app/services/all-questionnair.service';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-questionnair',
  templateUrl: './questionnair.component.html',
  styleUrls: ['./questionnair.component.scss']
})
export class QuestionnairComponent implements OnInit {

  constructor(private questionnairs : AllQuestionnairService) { }

  allQuestionnair;
  subscribtion:Subscription;
  activeQuestionNumber = 0;
  isValidtoContinue= true;

  ngOnInit() {
    this.subscribtion= this.questionnairs.getAllQuestionnair()
      .subscribe(all => {
        this.allQuestionnair = (JSON.parse(all))["questionnaire"];
        console.log( this.allQuestionnair);
      });
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
  questionChanged($event){
   console.log($event);
  }

}
