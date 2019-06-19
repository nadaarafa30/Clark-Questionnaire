import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
  @Input() Questionnair;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  AnsweredQuestion(){
    // this.newItemEvent.emit(this.values);
  }
  selectedValue(value){
    console.log(value)
  }

}
