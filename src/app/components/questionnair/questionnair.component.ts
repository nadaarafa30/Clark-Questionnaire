import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AllQuestionnairService } from 'src/app/services/all-questionnair.service';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { Subscription } from 'rxjs/internal/Subscription';
import { AnswersService } from 'src/app/services/answers.service';

@Component({
  selector: 'app-questionnair',
  templateUrl: './questionnair.component.html',
  styleUrls: ['./questionnair.component.scss'],

})
export class QuestionnairComponent implements OnInit {

  constructor(private questionnairs : AllQuestionnairService , private  AnswersService: AnswersService) { }

  allQuestionnair;
  subscribtion:Subscription;
  activeQuestionNumber = 0;
  isValidtoContinue= true;
  totalQuestions=0;
  listOfAnswers=[];

  ngOnInit() {
    this.subscribtion= this.questionnairs.getAllQuestionnair()
      .subscribe(all => {
        this.allQuestionnair = (JSON.parse(all))["questionnaire"];
        this.totalQuestions= this.allQuestionnair.questions.length-1;
      });
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
    this.AnswersService.reset();
  }
  questionChanged($event){
    this.AnswersService.addAnswer($event);
    if($event['question_type'] == 'singleChoice'){
      setTimeout(() => {
        this.next();        
      }, 400);
    }
  }

  gerPersentage(){  
    return Number((this.activeQuestionNumber/ this.totalQuestions)*100).toFixed(1) + '%';
  }

  next(){
    this.isValidtoContinue=false;   
    this.checkValidations(); 
    if(this.isValidtoContinue){
      this.activeQuestionNumber=this.activeQuestionNumber+1;      
    }
    else{
      alert("Please select Answer To continue this is Mandatory");
    }
  }
  prev(){
    this.isValidtoContinue=false;        
    this.activeQuestionNumber=this.activeQuestionNumber-1;
  }

  Submit(){
    let realAnswer = Object.assign({},this.AnswersService.getAllAnswers());
    let total=(Object.keys(realAnswer).map(function(key) {return [Number(key), realAnswer[key]]}));
    alert("You answered " + total.length + " Question , Thanks For your Time");
    
  }

  checkValidations(){
    this.listOfAnswers =this.AnswersService.getAllAnswers();
    if((this.allQuestionnair.questions[this.activeQuestionNumber].required == true && this.listOfAnswers[this.activeQuestionNumber] &&
      this.listOfAnswers[this.activeQuestionNumber].valid == true)
    || this.allQuestionnair.questions[this.activeQuestionNumber].required == false
    ){
   this.isValidtoContinue=true;
    }
    else{
     this.isValidtoContinue=false;
    }
  }

}
