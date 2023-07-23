import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DtoPropmt } from '../DTO/dto-propmt';;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagessService {

  constructor(private http:HttpClient) { }

  postPromptGPT(dto:DtoPropmt):Observable<any>{
    return this.http.post<any>("http://localhost:8080/GPT/post",dto) // For Local dev 
    // return this.http.post<any>("http://localhost:8081/GPT/post",dto) // For container 
  }

  postPromptLAMA(dto:DtoPropmt):Observable<any>{
    return this.http.post<any>("http://localhost:8080/LAMA/post",dto) // For Local dev 
    // return this.http.post<any>("http://localhost:8080/LAMA/post",dto) // For container 
  }

}
