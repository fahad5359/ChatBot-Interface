import { Component, Input, OnInit } from '@angular/core';
import { MessagessService } from '../Model/messagess.service';
import { DtoPropmt } from '../DTO/dto-propmt';
import { Tst } from '../tst';


@Component({
  selector: 'app-mega-cont',
  templateUrl: './mega-cont.component.html',
  styleUrls: ['./mega-cont.component.css']
})
export class MegaContComponent {


  dto:DtoPropmt;
  constructor(private service:MessagessService) { 
    this.dto= new DtoPropmt();
  }
  

  
  // Add string values to array each time a button is pressed. then display array using string interpolation.
  displayingTextAsChat: string[] = [];
  mesage: string="";
  responsee:string="";
  displayingResponseAsChat:string[]=[];

  sendPrompt() {
    // Handle prompt sent 
    this.dto.prompt=this.mesage
    console.log("This is the paylowd -->",this.dto)
    this.service.postPromptGPT(this.dto).subscribe(
      response =>{
        console.log("This is the response --> ",response.resppnse)
        this.responsee=response.resppnse;
        this.displayingResponseAsChat.push(this.responsee)
      },err=>{
        console.log("This is err message --> ",err.message)
      }
    )
    // push msage Wretten into screen
    if (this.mesage) {
      this.displayingTextAsChat.push(this.mesage)
    }
  }


}
