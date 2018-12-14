import { Component, OnInit } from '@angular/core';
import { DBProviderService } from '../dbprovider.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {

  constructor(private service: DBProviderService){ }

  ngOnInit() {

  }

public account: any;
public login: any;

  public getAccountDetails(){
  this.account =  this.service.getAccount(1); // hårdkådad
  
  }

}
