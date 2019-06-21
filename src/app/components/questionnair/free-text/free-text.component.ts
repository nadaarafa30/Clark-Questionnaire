import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { AnswersService } from 'src/app/services/answers.service';

@Component({
  selector: 'app-free-text',
  templateUrl: './free-text.component.html',
  styleUrls: ['./free-text.component.scss']
})
export class FreeTextComponent implements OnInit {
   @Input() Questionnair;
   @Output() newItemEvent = new EventEmitter<string>();
   objectToEmit;
   value='';
   
   
  constructor(private AnswersService:AnswersService) { }

  ngOnInit() {
    if(this.AnswersService.getAllAnswers().length > 0 && this.AnswersService.getAnswerById(this.Questionnair.index) != undefined){
      this.value= this.AnswersService.getAnswerById(this.Questionnair.index).answer;      
    }
  }

  onKey(value: string) {
    this.value=value;
    this.objectToEmit={
      'question_type':'text',      
      'question_id':this.Questionnair.question.identifier,
      'index':this.Questionnair.index,
      'valid':this.checkValide(this.value),
      'answer': this.value,
    }
    this.AnsweredQuestion();
  }
  

  AnsweredQuestion(){
    if (this.checkValide(this.value)){
      this.newItemEvent.emit(this.objectToEmit);      
    }
    else{
      this.AnswersService.editAnswer(this.Questionnair.index,undefined);    
    }
  }
  checkValide(value){
    if(value.length > 0){
      return true;
    }
    else{      
      return false;
    }
  }

}
