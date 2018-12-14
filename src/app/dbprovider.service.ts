import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Datetime } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DBProviderService {
  date: string
  private bookURL = 'https://bookapi20181214112201.azurewebsites.net/api/books';
  private loginURL = 'https://bookapi20181214112201.azurewebsites.net/api/Logins';
  private accountURL = 'https://bookapi20181214112201.azurewebsites.net/api/Accounts';
  private advertURL = 'https://bookapi20181214112201.azurewebsites.net/api/Adverts';
  private authorURL = 'https://bookapi20181214112201.azurewebsites.net/api/Authors';
  private authorBookURL = 'https://bookapi20181214112201.azurewebsites.net/api/AuthorBooks';

  constructor(private http: HttpClient) { }

  public getBooks(){
    return this.http.get<any>(this.bookURL)
  }

  public getAds(){
    return this.http.get<any>(this.advertURL)
  }

  public createAd(advertTitle: string, advertDescription: string, advertPrice: Number, advertLocation: string, bookCategory: string,  activeAdvert: number, bookID: number, accountID: number, )
  {
    this.date = new Date().toISOString().slice(0,16);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let data ={
      "Title": advertTitle,
      "Description": advertDescription,
      "Price": advertPrice,
      "Location": advertLocation,
      "Category": bookCategory,
      "CreationDate": this.date,
      "ActiveAdvert": true,
      "BookID": bookID,
      "AccountID": accountID,
    }
    this.http.post(this.advertURL, data, httpOptions).subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
    console.log(advertTitle as string, advertDescription, advertPrice, advertLocation, bookCategory,  activeAdvert, bookID, accountID)
    console.log(this.advertURL)
  }

  private loginList: any;
  public getLogin(username, password){
   this.loginList = this.http.get<any>(this.loginURL);
   
   return this.loginList.filter(function (item){
   if(item.Username == username && password == item.Password)
   {
    return item;
   }
   });
   //hämtar alla logins men måste checka efter korrekt login
  }

  public getLoginDetails(ID)
  {
   return this.http.get<any>(this.loginURL + ID);
  }

  public getAccount(accountID: any){
   return this.http.get<any>(this.accountURL + accountID);
  }

  public updateAccount(account:any): void {
    this.http.put(this.accountURL + account.ID, account);
  }

}
