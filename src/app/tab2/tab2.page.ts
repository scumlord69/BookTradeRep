import { Component, OnInit } from '@angular/core';
import { DBProviderService } from '../dbprovider.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  books: any;
  images = ['imagename.jpg', 'image2.jpg'];

  filters: Boolean = false;

  constructor(private dbservice: DBProviderService){ }

  ngOnInit(){
    this.dbservice.getBooks().subscribe(x=>{
      this.books = x as any;
      console.log(x)
    }, error => console.error(error));
  }

  showFilters(){
    this.filters = !this.filters;    
  }
}
