import { Component } from '@angular/core';
import { DBProviderService } from '../dbprovider.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private service:DBProviderService){
this.getAccountAndAds();
  }

  public getAccountAndAds()
  {
    // behöver spara "login" värden för att hämta login
    // för att sedan hämta account, använd loginID för att
    // få fram accounts loginID, för att sedan få AccountID 


  }

}
