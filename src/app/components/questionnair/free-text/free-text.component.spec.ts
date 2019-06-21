// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FreeTextComponent } from './free-text.component';
// import { Component, DebugElement } from "@angular/core";
// import { By } from "@angular/platform-browser";
// import { AnswersService } from 'src/app/services/answers.service';
// import { FormsModule } from '@angular/forms';

// describe('FreeTextComponent', () => {
//   let component: FreeTextComponent;
//   let fixture;
//   let textarea;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         imports: [ FormsModule ],
//         declarations: [ FreeTextComponent ]
//     })
//     .compileComponents();
        
//   }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(FreeTextComponent);
//         component = fixture.componentInstance;
//         textarea = fixture.debugElement.query(By.css('textarea[name=Answer]'));
//         fixture.detectChanges();
//         console.log(textarea);
        
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('raises the insertedValue event when keyup', () => {
//     const Questionnair =   {
//         "question_type": "text",
//         "identifier": "date_22039590",
//         "headline": "Was wäre Dein Wunschtermin für den Beginn der Privathaftpflichtversicherung?",
//         "description": null,
//         "required": false,
//         "multiline": "false",
//         "jumps": []
//       };
//       component.Questionnair = Questionnair;
//   });

//   it('Entering value emits AnsweredQuestion event', () => {
//     fixture.detectChanges();    
//     let textareaValue;
//     console.log(textarea);
//     textarea.value = "yes this is the answer"; (1)
//     component.newItemEvent.subscribe((value) => textareaValue = value);
//     textarea.triggerEventHandler('keyup', null); (2)
//     expect(component.objectToEmit.answer).toBe("yes this is the answer");
//   });

  
// });
