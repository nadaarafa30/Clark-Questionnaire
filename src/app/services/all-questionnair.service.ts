import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of } from 'rxjs';
declare var require: any

@Injectable({
  providedIn: 'root'
})

export class AllQuestionnairService {

  constructor(private httpService: HttpClient) { }
   data = require('src/app/services/questionnaire.json');

  getAllQuestionnair(){
      return of (JSON.stringify(this.data))
    }
  }
