import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
  
})

export class AppComponent {
  title = 'Clear Water Borehole Drilling';

  message;

  email;

  phone;

  data =  {"sender":{"name":"ClearWater","email":"mubatawaynne@yahoo.com"},
  "to":[{"email":"mubatawaynne@gmail.com","name":"waynne"}],
  "textContent":"this is my the message from angular","subject":"enquiry"}

  // Base url
  baseurl = 'https://api.sendinblue.com/v3/smtp/email';

  api_key  = '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'
  name: string;
 
  constructor(private http: HttpClient) { }


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.api_key
    })
  }

  // POST
  sendMail() {
  
  
    this.data.textContent = `client ${this.name} has sent you the message below from your website
    ${this.message} 

    phone ${this.phone}
    email ${this.email}
    
    `
    console.log(this.data.textContent)
   this.http.post(this.baseurl, JSON.stringify(this.data), this.httpOptions)
   .subscribe(x=>{
     console.log(x)
   })
   this.name = ''; 
   this.email = '';
   this.phone = '';
   this.message = '';
   
  } 
  
}

