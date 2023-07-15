import { Component, Input, OnInit } from '@angular/core';
import { MessagessService } from '../services/messagess.service';
import { DtoPropmt } from '../dto-propmt';


@Component({
  selector: 'app-mega-cont',
  templateUrl: './mega-cont.component.html',
  styleUrls: ['./mega-cont.component.css']
})
export class MegaContComponent implements OnInit {


  dto:DtoPropmt;
  constructor(private service:MessagessService) { 
    this.dto= new DtoPropmt();
  }
  

  ngOnInit() { }
  // Bind array To HTML, Add string values to array each time a button is pressed.
  displayingTextAsChat: string[] = [];
  mesage: string;
  responsee:string="";
  displayingResponseAsChat:string[]=[];

  sendPrompt() {
    // Handle prompt sent 
    this.dto.prompt=this.mesage
    console.log("This is the paylowd -->",this.dto)
    this.service.postPrompt(this.dto).subscribe(
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

    // push response into screen

    if (this.responsee) {
      
    }
  }
}
