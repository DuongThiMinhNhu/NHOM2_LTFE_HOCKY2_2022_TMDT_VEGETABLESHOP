import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss']
})
export class LoginGoogleComponent implements OnInit {
  title = 'loginGoogle';

  auth2: any;

  @ViewChild('loginRef', {static: true }) loginElement!: ElementRef;

  constructor() { }

  ngOnInit() {

    this.googleAuthSDK();
  }

  private googleAuthSDK() {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    const form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    const params = {
      'client_id': '439214766703-4s1nhr47ag5pbhi7anqqnu2sga40civ2.apps.googleusercontent.com',
      'redirect_uri': 'http://localhost:4200/',
      'response_type': 'token',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'include_granted_scopes': 'true',
      'state': 'pass-through value'
    };

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }
}
