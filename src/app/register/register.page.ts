import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from "@ionic/angular";
import { CognitoUserService } from "../services/cognito-user.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	name: string;
  organization: string;
  organizationLead: string;
  reportingLead: string;
  	email: string;
  password: string;
  contact: string;

  constructor(public navCtrl: NavController,
    public CognitoService: CognitoUserService, public alertController: AlertController,private router: Router) { }

  ngOnInit() {
  }

  public  goToHome(): void{
  	this.router.navigate(['/home']);
  }

  public changeEnvironment(event) : void{

  		if(this.organization === 'ST'){
  				this.organizationLead = 'Bill';
  		}else if(this.organization === 'CM'){
  				this.organizationLead = 'Test';
  		}



  }

    register() {
    this.CognitoService.signUp(this.email, this.password).then(
      res => {
       // this.promptVerificationCode();
       this.addUser(this.email , this.name, this.contact);
       alert('Please verify link sent to email');
      },
      err => {

      	this.responseErrorMessage(err);
        console.log(err);
      }
    );
  }

 async  promptVerificationCode() {
    let alert = await this.alertController.create({
      message: "Enter Verfication Code",
      inputs: [
        {
          name: "VerificationCode",
          placeholder: "Verification Code"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Verify",
          handler: data => {
            this.verifyUser(data.VerificationCode);
          }
        }
      ]
    });
  await  alert.present();
  }

  verifyUser(verificationCode) {
    this.CognitoService.confirmUser(verificationCode, this.email).then(
      res => {
      	this.responseSucessMessage(res);
        console.log(res);
      },
      err => {
        alert(err.message);
      }
    );
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

    async  responseSucessMessage(res) {
    	//this.addUser(this.email , this.name, this.contact);
    
  }

async addUser(email, name , contact) {
 /* this.addDetail.addData(email , name , contact)
    .subscribe(res => {
   alert('Details Saved');
    }, err => {
      console.log(err);
    });*/
}

goBack(){

    this.router.navigate(['/login']);
}


}
