import { Component, OnInit } from '@angular/core';
import { DBProviderService } from '../dbprovider.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit{
  ngOnInit(){}

  constructor(private dbservice: DBProviderService){ }
  
  public submit(Username: string, Password: string, Email: string,  FirstName: string, LastName: string, MobileNumber: string){
    this.dbservice.createLogin(Username, Password, Email, FirstName, LastName, MobileNumber)
  }
}
