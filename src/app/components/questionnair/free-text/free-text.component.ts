import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-free-text',
  templateUrl: './free-text.component.html',
  styleUrls: ['./free-text.component.scss']
})
export class FreeTextComponent implements OnInit {
   @Input() Questionnair;
   @Output() newItemEvent = new EventEmitter<string>();
   values = '';
   
  constructor() { }

  ngOnInit() {
  }

  onKey(value: string) {
    this.values = value ;
    this.AnsweredQuestion();
  }

  AnsweredQuestion(){
    this.newItemEvent.emit(this.values);
  }


}
