import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { AnswersService } from 'src/app/services/answers.service';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.scss']
})
export class MultiChoiceComponent implements OnInit {
  @Input() Questionnair;
  @Output() newItemEvent = new EventEmitter<string>();
  objectToEmit;
  
  constructor(private AnswersService:AnswersService) { }

  ngOnInit() {
  }


  AnsweredQuestion(){
    if(this.checkValide(this.Questionnair.question.choices)){
      this.newItemEvent.emit(this.objectToEmit);      
    }
    else{
      this.AnswersService.editAnswer(this.Questionnair.index,undefined);    
      
    }
  }

  getValue(){
    this.objectToEmit={
      'question_id':this.Questionnair.question.identifier,
      'index':this.Questionnair.index,
      'valid':this.checkValide(this.Questionnair.question.choices),
      'answer': this.Questionnair.question.choices,
    }
    this.AnsweredQuestion();
  }

  checkValide(choices){
    for(let i=0 ;i<choices.length ; i++){
      if(choices[i].selected == true){
        return true;
      }   
    }
    return false;
  }

}
