import { Component, OnInit } from '@angular/core';
import { DBProviderService } from '../dbprovider.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }

  constructor(private service:DBProviderService) { }

 
private login:any;
  public Login(passwordInput, usernameInput)
{
  console.log("this method is running");
this.login =  this.service.getLogin(passwordInput,usernameInput)
console.log("this method is running after service");
if(this.login !== null)
{
// next page
}  
console.log("this method is running at the end");
}
}
