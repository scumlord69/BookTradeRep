import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Datetime } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DBProviderService {
  private userID: Number;
  private loginList: any;
  private date: string;
  private loginListID;
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


  public getLogin(username, password){
   this.loginList = this.http.get<any>(this.loginURL);
   
  //  this.loginListID = this.loginList.filter(x => x.Username === username && x.Password === password)
  //  this.userID = this.loginListID.ID
   console.log(this.userID)
   return this.loginList.filter(x => x.Username === username && x.Password === password);

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

  public createLogin(Username: string, Password: string, Email: string,  FirstName: string, LastName: string, MobileNumber: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let logindata ={
      "Username": Username,
      "Password": Password,
      "E-mail": Email,
    }
    this.http.post(this.loginURL, logindata, httpOptions).subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
    this.getLogin(Username, Password)
    let accountdata ={
      "FirstName": FirstName,
      "LastName": LastName,
      "E-mail": Email,
      "LoginID": this.userID,
    }
    
    this.http.post(this.accountURL, accountdata, httpOptions).subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
  }
}
