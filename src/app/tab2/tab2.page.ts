import { Component, OnInit } from '@angular/core';
import { DBProviderService } from '../dbprovider.service';
import { text } from '@angular/core/src/render3';
import { NavController } from '@ionic/angular';
import {  LoginPage } from '../login/login.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public filterAds:any;
  public ads: any;
  public searchText: any;
  private images = ['imagename.jpg', 'image2.jpg'];

  filters: Boolean = false;

  constructor(
    private dbservice: DBProviderService,
     public navctrl:NavController
     ){ }

  ngOnInit(){
    this.dbservice.getAds().subscribe(x=>{
      this.ads = x as any;
      this.filterAds = this.ads;
      console.log(x)
    }, error => console.error(error));
    
  }

  // Filter methods
 public showFilters(){
    this.filters = !this.filters;    
  }
  
  // overwrite with all ads
 public clearFilters()
  {
    this.filterAds = this.ads;
  }

  //Filters via category
  public Category: any;
  public selectedCategory: any;
 public categoryOptionChanged(): void{
    console.log(this.selectedCategory)

    if(this.selectedCategory === undefined || this.selectedCategory === "")
    {
      return;
    }
    this.filterAds = this.filterAds.filter(x => x.Category === this.selectedCategory)    
    console.log(this.filterAds)

    this.setToUndefinedAds();

  }

  // gets user input
 public AddCategoryValue($event)
 {
  console.log("Tries to get category value")
   console.log($event.target.value)
this.selectedCategory = $event.target.value
 }

  //Filters via location
  public Location: any;
  public locationFilter(): void{
    console.log(this.Location)
    if(this.Location === undefined || this.Location === "")
    {
      return;
    }
    this.filterAds = this.filterAds.filter(x => x.Location === this.Location)    
    console.log(this.filterAds)

    this.setToUndefinedAds();

  }

  // gets user input
  public AddLocationValue($event)
  {
    console.log("Tries to get location value")
    console.log($event.target.value)
 this.Location = $event.target.value
  }

  // min max price filter
public minPrice: any;
public maxPrice: any;
 public minMaxFilter(): void{
    console.log(this.minPrice)
    console.log(this.maxPrice )
    if(this.minPrice === undefined || this.minPrice === "" && this.maxPrice === undefined || this.maxPrice === "")
    {
      return;
    }

    if(this.minPrice !== undefined && this.minPrice !== "" && this.maxPrice !== undefined && this.maxPrice !== "" )
    {
     
    this.filterAds = this.filterAds.filter(x => x.Price < this.maxPrice && x.Price > this.minPrice)    
    }
    else if(this.minPrice === undefined || this.minPrice === "") 
    {
     
      this.filterAds =  this.filterAds = this.filterAds.filter(x => x.Price < this.maxPrice)   
    }
    else if ( this.maxPrice === undefined || this.maxPrice === "") 
    {
      
      this.filterAds = this.filterAds.filter(x =>  x.Price > this.minPrice)   
    }
    console.log(this.filterAds)

    this.setToUndefinedAds();

  }

  // gets user input
  public AddMinValue($event)
  {
    console.log("Tries to get min price value")
    console.log($event.target.value)
 this.minPrice = $event.target.value
  }

  // gets user input
  public AddMaxValue($event)
  {
    console.log("Tries to get max price value")
    console.log($event.target.value)
 this.maxPrice = $event.target.value
  }
  
  // No ads found code
  public setToUndefinedAds(){
    if(this.filterAds[this.filterAds.length-1] === 0)
    {
        this.filterAds = undefined;
    }
  }

  list: any[]
  // sphagetti Search filter 
  searchAds(){ // https://www.tutorialspoint.com/typescript/typescript_string_search.htm
    // använd den länken good for nothing
    this.clearFilters()
    console.log(this.searchText)
    if(this.searchText === undefined || this.searchText === "" )
    {
      
    }
    else{

     this.list = [];
      for(let item of this.filterAds)
      {
        // var test = item.Title;
        if(item.Title.includes(this.searchText)){
          //this.filterAds = this.filterAds.filter(x => x.Title === this.searchText)
          this.list.push(item)
          console.log(item)
        }
      }
      console.log(this.list)
      this.filterAds = this.list
    }
    
    // if search input == undefined gå vidare till filter
    
    this.categoryOptionChanged()
    this.locationFilter()
    this.minMaxFilter()

    console.log(this.filterAds) // använd alla filter metoder efter searchen, zzzz sphagetti 

    this.setToUndefinedAds();
   
  }

  public sortByLatest(){

  }

  public sortByPrice(){
    this.filterAds = this.filterAds.sort(x => x.Price)
  }

  public ViewDetailedAdvertisement(ad:any)
   {

   }
}
