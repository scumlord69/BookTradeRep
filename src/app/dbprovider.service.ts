import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DBProviderService {
  
  private bookURL = 'https://bookapi20181213014843.azurewebsites.net/api/books';
  private loginURL = '';

  constructor(private http: HttpClient) { }

  public getBooks(){
    return this.http.get<any>(this.bookURL)
  }

}
