import { Component, OnInit } from '@angular/core';
import { CognitoUserService } from "../services/cognito-user.service";
import { RegisterPage } from "../register/register.page";
import { ReactiveFormsModule } from '@angular/forms';
import { NavController, AlertController } from "@ionic/angular";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	email: string;
  password: string;
  signUpPage = RegisterPage;
  	items : any;
	loading: boolean = false;

  constructor(public CognitoService: CognitoUserService, public navCtrl: NavController, public alertController: AlertController , public router: Router) { }

  ngOnInit() {
  }


 
  async login(){

    this.CognitoService.authenticate(this.email,this.password)
    .then(res =>{
      console.log(res);
     this.responseSucessMessage(res);
    }, err =>{
    	this.responseErrorMessage(err);
      console.log(err);
    });
  }

   async  responseSucessMessage(res) {
   	  this.CognitoService.setToken(res && res.idToken && res.idToken.jwtToken);
  this.router.navigate(['/home', {email: this.email}]);
  }

     async  responseErrorMessage(err) {
     	let msg = err && err.message;
    let alert = await this.alertController.create({
    	header: 'Alert',
      message: msg,
       buttons: ['OK']
    });
  await  alert.present();
  }

}
