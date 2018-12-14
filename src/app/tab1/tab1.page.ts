import { Component, OnInit } from '@angular/core';
import { DBProviderService } from '../dbprovider.service';
import { Datetime } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  ngOnInit(){}

  constructor(private dbservice: DBProviderService){ }
  
  public submit(advertTitle: string, advertDescription: string, advertPrice: number, advertLocation: string, bookCategory: string, activeAdvert: number, bookID: number, accountID: number){
    this.dbservice.createAd(advertTitle, advertDescription, advertPrice,  advertLocation, bookCategory, activeAdvert,  bookID, accountID  )
  }
}
