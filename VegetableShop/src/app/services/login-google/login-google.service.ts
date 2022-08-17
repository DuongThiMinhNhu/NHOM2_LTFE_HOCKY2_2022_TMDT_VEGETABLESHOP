import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGoogleService {
  auth2: any;
  constructor() { }
  ngOnInit() {
    // this.googleAuthSDK();
  }
  //
  // callLoginButton() {
  //   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
  //       (googleAuthUser:any) => {
  //         let profile = googleAuthUser.getBasicProfile();
  //         console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
  //         console.log('ID: ' + profile.getId());
  //         console.log('Name: ' + profile.getName());
  //         console.log('Image URL: ' + profile.getImageUrl());
  //         console.log('Email: ' + profile.getEmail());
  //
  //         /* Write Your Code Here */
  //
  //       }, (error:any) => {
  //         alert(JSON.stringify(error, undefined, 2));
  //       });
  //
  // }
  //
  // googleAuthSDK() {
  //   (<any>window)['googleSDKLoaded'] = () => {
  //     (<any>window)['gapi'].load('auth2', () => {
  //       this.auth2 = (<any>window)['gapi'].auth2.init({
  //         client_id: 'YOUR CLIENT ID HERE',
  //         cookiepolicy: 'single_host_origin',
  //         scope: 'profile email'
  //       });
  //       this.callLoginButton();
  //     });
  //   }
  //
  //   (function(d, s, id){
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {return;}
  //     js = d.createElement('script');
  //     js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs?.parentNode?.insertBefore(js, fjs);
  //   }(document, 'script', 'google-jssdk'));
  // }
}
