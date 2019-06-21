import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  Allanswers=[];
  constructor() { }

  getAllAnswers(){
    return this.Allanswers;
  }

  addAnswer(answer){
    this.Allanswers[answer.index]=answer;
  }
  getAnswerById(index){
    return this.Allanswers[index];
  }
  editAnswer(index,value){
    this.Allanswers[index]=value;
  }
  reset(){
    this.Allanswers=[];
    
  }


}
