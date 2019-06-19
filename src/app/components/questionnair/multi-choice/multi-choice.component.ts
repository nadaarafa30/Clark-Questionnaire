import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.scss']
})
export class MultiChoiceComponent implements OnInit {
  @Input() Questionnair;
  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }


  AnsweredQuestion(){
    // this.newItemEvent.emit(this.values);
  }
  getValue(){
    console.log(this.Questionnair)
  }

}
