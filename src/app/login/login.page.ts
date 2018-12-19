import { Component, OnInit } from '@angular/core';
import { DBProviderService } from '../dbprovider.service';
// import { NavController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
// import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }

  constructor(
    private service: DBProviderService,
    // private navController: NavController,
    // public auth: Auth,
    // public user: User,
  ) { }


  private login: any;
  public Login(passwordInput, usernameInput) {
    console.log("this method is running");
    this.login = this.service.getLogin(usernameInput, passwordInput)
    console.log(this.login)

    if (this.login !== null || this.login !== undefined) {
      // next page
      console.log("login success?")
     // this.auth.login('basic', { 'usernameInput': usernameInput, 'passwordInput': passwordInput })



    } // if


  } // metod

}
