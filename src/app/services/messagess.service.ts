import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DtoPropmt } from '../dto-propmt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagessService {

  constructor(private http:HttpClient) { }

  postPrompt(dto:DtoPropmt):Observable<any>{
    // return this.http.post<any>("http://localhost:8080/GPT/post",dto) // For Local dev 
    return this.http.post<any>("http://localhost:8080/GPT/post",dto) // For container 
  }
}
